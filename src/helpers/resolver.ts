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
