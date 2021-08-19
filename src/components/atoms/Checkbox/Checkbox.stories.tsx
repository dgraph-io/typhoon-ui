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

import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default {
    title: "Atoms/Checkbox",
    component: Checkbox,
};

export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(true);

    return (
        <Checkbox
            label={"Click me to toggle"}
            id="checkbox"
            checked={checked}
            onClick={() => {
                setChecked(!checked);
            }}
        />
    );
};

export const CheckboxUnchecked = () => <Checkbox id="checkbox" />;

export const CheckboxChecked = () => <Checkbox checked id="checkbox" />;
