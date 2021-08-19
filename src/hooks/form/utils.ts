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

import {
    FormConfig,
    FormErrorType,
    FormConfigValueType,
    RuleType,
} from "./useForm.types";

export const convertToFormState = <
    T extends FormConfigValueType,
    K extends keyof T
>(
    config: T,
    ignoreValidation: boolean = false
) => {
    const keys = <K[]>Object.keys(config);
    return keys.reduce((res, key) => {
        // @ts-ignore
        res[key] = {
            value: config[key].default,
            errors: ignoreValidation
                ? []
                : // @ts-ignore
                  getErrors(key, config[key].default, config[key].rules),
        };
        return res;
    }, {} as FormConfig<T>);
};

export const getErrors = (
    key: string,
    value: any,
    rules: Array<RuleType> = []
) => {
    return rules.reduce((errors, rule) => {
        if (!rule.checkIsValid(value)) {
            return [
                ...errors,
                {
                    message: rule?.message || "Error",
                    type: rule.type,
                    for: key,
                },
            ];
        }
        return errors;
    }, [] as Array<FormErrorType>);
};

export const getFormValues = <T extends FormConfigValueType>(
    values: Partial<
        {
            [K in keyof T]: T[K]["default"];
        }
    >,
    form: FormConfig<T>,
    config: T
): FormConfig<T> => {
    return {
        ...form,
        ...Object.keys(values).reduce((result, key) => {
            return {
                ...result,
                [key]: {
                    ...form[key],
                    value: values[key],
                    errors: getErrors(
                        key,
                        values[key],
                        config[key]?.rules || []
                    ),
                },
            };
        }, {}),
    };
};
