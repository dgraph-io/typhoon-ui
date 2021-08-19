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

import { useCallback, useState } from "react";
import {
    FormConfigValueType,
    FormConfig,
    FormErrorType,
} from "./useForm.types";

import { convertToFormState, getFormValues, getErrors } from "./utils";

export const useForm = <T extends FormConfigValueType>(config: T) => {
    const [formState, setFormState] = useState(
        convertToFormState(config, true)
    );

    const setValue = useCallback(
        (values: Partial<{ [K in keyof T]: T[K]["default"] }>) =>
            setFormState(prevState => {
                return getFormValues<T>(values, prevState, config);
            }),
        [config]
    );

    const validate = useCallback(
        (form: FormConfig<T>) => {
            const errors = [] as Array<FormErrorType>;
            return errors.concat(
                ...Object.keys(form).map(key => {
                    return getErrors(key, form[key].value, config[key].rules);
                })
            );
        },
        [config]
    );

    const form = Object.keys(formState).reduce((agg, key) => {
        return {
            ...agg,
            [key]: {
                ...formState[key],
                onChange: (event: any) => {
                    //@ts-ignore
                    setValue({ [key]: event.target.value });
                },
            },
        };
    }, {} as FormConfig<T>);

    return {
        form,
        formState,
        setValue,
        validate,
        errors: [],
    };
};
