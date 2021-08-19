/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { scales, shortcuts } from "./constants";

export function resolveStyles(css: any, theme: any): Record<string, any> {
    return Object.keys(css).reduce((resolvedCSS, key) => {
        if (typeof css[key] === "object") {
            return {
                ...resolvedCSS,
                [key]: resolveStyles(css[key], theme),
            };
        }
        if (shortcuts[key]) {
            return {
                ...resolvedCSS,
                ...resolveShortcuts(css, theme, key),
            };
        }
        if (scales[key] && theme.tokens[scales[key] + "." + css[key]]) {
            return {
                ...resolvedCSS,
                [key]: theme.tokens[scales[key] + "." + css[key]],
            };
        }
        return {
            ...resolvedCSS,
            [key]: resolveTemplateString(css[key], theme.tokens),
        };
    }, {});
}

function resolveShortcuts(css: any, theme: Object, key: any) {
    return shortcuts[key].reduce((agg: any, shortcutKey: any) => {
        return {
            ...agg,
            ...resolveStyles(
                {
                    [shortcutKey]: css[key],
                },
                theme
            ),
        };
    }, {});
}

export function resolveTemplateString(
    value: any,
    flattenedTokens: any
): string {
    if (typeof value === "string") {
        return Object.keys(flattenedTokens).reduce((resolvedString, key) => {
            const placeholder = "{{" + key + "}}";
            return resolvedString.replace(placeholder, flattenedTokens[key]);
        }, value);
    } else {
        return value;
    }
}
