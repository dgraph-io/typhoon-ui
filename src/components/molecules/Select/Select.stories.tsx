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
import Select from "./Select";

import { SelectType } from "./Select.types";

export default {
    title: "Molecules/Select",
    component: Select,
};

export const SelectControlled = () => {
    const [selected, setSelected] = useState(null);

    return (
        
            <Select
                label={"Select an option"}
                selected={selected}
                onSelect={({ value }: SelectType) => {
                    setSelected(value);
                }}
                values={Array(15)
                    .fill(0)
                    .map((x, index) => ({
                        label: `Option ${index}`,
                        value: `option${index}`,
                        id: `op${index}`,
                    }))}
            />
        
    );
};

export const SelectLongName = () => {
    const [selected, setSelected] = useState({
        label: "It is going to be a long long long long option",
    });

    return (
        
            <Select
                styles={{
                    width: "100px",
                }}
                label={"Select an option"}
                selected={selected}
                onSelect={({ value }: SelectType) => {
                    setSelected(value);
                }}
                values={Array(15)
                    .fill(0)
                    .map((x, index) => ({
                        label: `It is going to be a long long long long option ${index}`,
                        value: `option${index}`,
                        id: `op${index}`,
                    }))}
            />
        
    );
};
