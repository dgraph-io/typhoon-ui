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

import React from "react";
import Text from "./Text";
import Stack from "../../layouts/Stack/Stack";

export default {
    title: "Atoms/Text",
    component: Text,
};

export const Sizes = () => (
    <Stack direction="vertical" gap={2}>
        <Text>Default typography</Text>
        <Text color="pink" weight={600}>
            With color
        </Text>
        <Text color="pink" weight={600}>
            With color and weight
        </Text>
        <Text variant={1}>Variant 1 size</Text>
        <Text variant={2}>Variant 2 size</Text>
        <Text variant={3}>Variant 3 size</Text>
        <Text variant={4}>
            Bigger variant of text? Checkout heading, will be a better option
            symantic wise.
        </Text>
    </Stack>
);
