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

import { noop } from "helpers/utils";

import React from "react";
import DatePicker from "./DatePicker";

export default {
    title: "Molecules/DatePicker",
    component: DatePicker,
};

export const Default = () => (
    
        <DatePicker
            disableFutureDate={true}
            onChange={noop}
            onClose={noop}
            now={new Date(2020, 1, 1)}
        />
    
);

export const DatePickerWithTime = () => (
    
        <DatePicker
            disableFutureDate={true}
            onChange={noop}
            onClose={noop}
            now={new Date(2020, 1, 1)}
            showTime={true}
        />
    
);
