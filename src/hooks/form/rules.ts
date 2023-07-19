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

import { RuleNameType, RuleType } from "./useForm.types";

export const RULES: Record<RuleNameType, RuleType> = {
    required: {
        type: "required",
        message: "Is required",
        checkIsValid: (value: any) => !(value === undefined || value === null),
    },
    email: {
        type: "email",
        message: "Invalid Email",
        checkIsValid: (value: string) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
        },
    },
    nonEmptyString: {
        type: "nonEmptyString",
        message: "Cannot be empty string",
        checkIsValid: (value: string) => {
            return value.trim();
        },
    },
    passwordLength: {
        type: "passwordLength",
        message: "Password length should be between 8 to 64 characters",
        checkIsValid: (value: string) => {
            const re = /^.{8,64}$/;
            return re.test(String(value));
        },
    },
    // for min length, I am considering "a@a.in" as a valid mail
    emailLength: {
        type: "emailLength",
        message: "Email length should be between 6 to 254 characters",
        checkIsValid: (value: string) => {
            const re = /^.{6,254}$/;
            return re.test(String(value));
        },
    },
};
