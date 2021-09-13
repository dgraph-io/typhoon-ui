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

import Text from "components/atoms/Text/Text";
import Tabs from "./Tabs";
import Tab from "./Tab";
import Stack from "components/layouts/Stack/Stack";

export default {
    title: "Molecules/Tabs",
    component: Tabs,
};

export const TabsControlled = () => {
    const [activeTabId, setActiveTabId] = useState("tab1");

    return (
        <Tabs selected={activeTabId} onSelect={setActiveTabId}>
            <Tab label="One" id={"tab1"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for One</Text>
                </Stack>
            </Tab>
            <Tab label="Two" id={"tab2"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for Two</Text>
                </Stack>
            </Tab>
            <Tab label="Three" id={"tab3"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for Three</Text>
                </Stack>
            </Tab>
        </Tabs>
    );
};

export const TabsControlledWithUnavailableOption = () => {
    const [activeTabId, setActiveTabId] = useState("tabx");

    return (
        <Tabs selected={activeTabId} onSelect={setActiveTabId}>
            <Tab label="One" id={"tab1"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for One</Text>
                </Stack>
            </Tab>
            <Tab label="Two" id={"tab2"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for Two</Text>
                </Stack>
            </Tab>
            <Tab label="Three" id={"tab3"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for Three</Text>
                </Stack>
            </Tab>
        </Tabs>
    );
};

export const TabsControlledWithCustomUnselection = () => {
    const [activeTabId, setActiveTabId] = useState("tabx");

    return (
        <Tabs
            selected={activeTabId}
            onSelect={setActiveTabId}
            unselected={"Select something"}
        >
            <Tab label="One" id={"tab1"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for One</Text>
                </Stack>
            </Tab>
            <Tab label="Two" id={"tab2"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for Two</Text>
                </Stack>
            </Tab>
            <Tab label="Three" id={"tab3"}>
                <Stack gap={2} direction="vertical">
                    <Text>Content for Three</Text>
                </Stack>
            </Tab>
        </Tabs>
    );
};
