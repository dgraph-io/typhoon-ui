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
import Tooltip from "./Tooltip";
import { Heading, Stack, Text } from "components";
export default {
    title: "Molecules/Tooltip",
    component: Tooltip,
};

export const DefaultTooltip = () => {
    return (
        <Tooltip
            position={"right"}
            content={() => (
                <Stack styles={{ width: "200px" }}>
                    <Text>Sampling Ratio</Text>
                    <Text>
                        Adjust the trace sampling rate for Dgraph queries with
                        the --trace option for Dgraph Alphas. By default,
                        --trace is set to 0.01 to trace 1% of queries.
                    </Text>
                </Stack>
            )}
        >
            <Heading>Hover over me to reveal</Heading>
        </Tooltip>
    );
};
