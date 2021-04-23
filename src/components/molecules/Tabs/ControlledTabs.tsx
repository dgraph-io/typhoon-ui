import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import { ControlledTabsPropsType } from "./Tabs.types";

const ControlledTabs = ({
    defaultSelected,
    ...props
}: ControlledTabsPropsType) => {
    const [activeTabId, setActiveTabId] = useState(defaultSelected);

    useEffect(() => {
        setActiveTabId(defaultSelected);
    }, [defaultSelected]);

    return <Tabs {...props} selected={activeTabId} onSelect={setActiveTabId} />;
};


export default ControlledTabs;
