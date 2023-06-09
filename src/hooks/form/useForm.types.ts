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

import { ChangeEventHandler } from "react";

export type FormConfigValueType = { [key: string]: FormElementType };

export type FormValuesType<T extends FormConfigValueType, K extends keyof T> = {
    [key: string]: FormValueType<T, K>;
};

export type FormConfig<T extends FormConfigValueType> = {
    [Key in keyof T]: FormValueType<T, Key>;
};

export type SetValueFn<T> = <K extends keyof T>(key: K, value: T[K]) => void;

export type RuleNameType = "required" | "email" | "nonEmptyString" | "passwordLength";
export interface RuleType {
    message: string;
    checkIsValid: Function;
    type: RuleNameType;
}

export interface FormElementType {
    default: any;
    rules?: Array<RuleType>;
}

export interface FormErrorType {
    message: string;
    for: string;
    type: RuleNameType;
}

export interface FormValueType<
    T extends FormConfigValueType,
    K extends keyof T
> {
    value: T[K]["default"];
    errors: Array<FormErrorType>;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
