import React, { useState } from "react";
import { FocusVisibleManager } from "hooks/useFocusVisible";
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
        <FocusVisibleManager>
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
        </FocusVisibleManager>
    );
};
