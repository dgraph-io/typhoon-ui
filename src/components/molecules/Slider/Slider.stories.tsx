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
import { Slider, Stack, Container, Text } from "components";

export default {
    title: "Molecules/Slider",
    component: Slider,
};

export const SliderDefault = () => {
    const [value, setValue] = useState(100);
    return (
        <Stack direction="vertical" gap={4}>
            <Slider
                label="Slider Example"
                max={1000}
                min={1}
                minLabel="1 GB"
                maxLabel="1000 GB"
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                }}
            />

            <Container>
                <Text>Value : {value}</Text>
            </Container>
        </Stack>
    );
};
