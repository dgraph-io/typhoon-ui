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

import { Button, Select, Navbar, NavbarLogo } from "components";

export default {
    title: "Molecules/Navbar",
    component: Navbar,
};

interface SelectValueType {
    value: any;
}

export const NavbarStory = () => {
    const [selected, setSelected] = useState(null);

    return (
        <Navbar>
            <NavbarLogo alt="slash-logo" src="/slash-logo.svg" />

            <Select
                fullWidth
                label={"Select your backend"}
                selected={selected}
                onSelect={({ value }: SelectValueType) => {
                    setSelected(value);
                }}
                values={Array(4)
                    .fill(0)
                    .map((x, index) => ({
                        label: `Option ${index}`,
                        value: `option${index}`,
                        id: `op${index}`,
                    }))}
            />

            <Button variant="ghost">Launch New Backend</Button>
        </Navbar>
    );
};
