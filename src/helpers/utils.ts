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

import { ComponentStylesType, VariantStylesType } from "./helpers.types";

import { resolveStyles } from "./resolver";

export const flatten = (
    obj?: any,
    parent?: any,
    res: any = {},
    delimiter: string = "."
): any => {
    for (const key in obj) {
        const propName = parent ? parent + delimiter + key : key;
        if (typeof obj[key] == "object") {
            flatten(obj[key], propName, res);
        } else {
            res[propName] = obj[key];
            if (key === "default") {
                res[parent] = obj[key];
            }
        }
    }
    return res;
};

export const getComponentStyles = ({
    component,
    theme,
}: ComponentStylesType): Object => {
    if (component && theme["components"] && theme["components"][component]) {
        return resolveStyles(theme["components"][component], theme);
    } else {
        return {};
    }
};

export function getVarianStyles({
    variant,
    component,
    theme,
}: VariantStylesType): any {
    if (isVariantPresent(variant, component, theme)) {
        return resolveStyles(
            theme["components"][component]["variants"][variant],
            theme
        );
    } else {
        return {};
    }
}

export function isVariantPresent(
    variant: string | number,
    component: any,
    theme: any
): Object {
    return (
        variant &&
        variant !== "default" &&
        theme["components"][component]["variants"] &&
        theme["components"][component]["variants"][variant]
    );
}

export const uuid = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = window.crypto.getRandomValues(new Uint32Array(1))[0] % 16,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
};

export const noop = (): void => {};

export function isObject(item: any): boolean {
    return item && typeof item === "object" && !Array.isArray(item);
}

export const merge = (...objectsToMerge: Array<Record<string, any>>) => {
    let target: any = {};
    const merger = (obj: Record<string, any>) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (
                    Object.prototype.toString.call(obj[prop]) ===
                    "[object Object]"
                ) {
                    target[prop] = merge(target[prop], obj[prop]);
                } else {
                    target[prop] = obj[prop];
                }
            }
        }
    };

    for (let i = 0; i < objectsToMerge.length; i++) {
        merger(objectsToMerge[i]);
    }

    return target;
};

export const sequentialPromiseAll = (promises: Array<Promise<any>>) =>
    promises.reduce(async (previousPromise, nextPromise) => {
        await previousPromise;
        return nextPromise;
    }, Promise.resolve());

export const titleCase = (text: string) => {
    return text
        .toLowerCase()
        .split(" ")
        .map(function (word) {
            return word[0] ? word.replace(word[0], word[0].toUpperCase()) : "";
        })
        .join(" ");
};
