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

import { Stack } from "components";
import React from "react";
import Paginator from "./Paginator";

export default {
    title: "Molecules/Paginator",
    component: Paginator,
};

export const Default = () => (
    <Stack direction="vertical" gap={2}>
        <Paginator
            total={200}
            offset={0}
            size={10}
            sizeRange={[10, 20, 30, 40]}
            onChange={value => console.log(value)}
        />
        <Paginator
            total={200}
            offset={190}
            size={10}
            sizeRange={[10, 20, 30, 40]}
            onChange={value => console.log(value)}
        />
        <Paginator
            total={200}
            offset={30}
            size={10}
            sizeRange={[10, 20, 30, 40]}
            onChange={value => console.log(value)}
        />
    </Stack>
);
