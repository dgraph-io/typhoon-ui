import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

ControlledTabs.propTypes = {
    defaultSelected: PropTypes.string,
};

export default ControlledTabs;
