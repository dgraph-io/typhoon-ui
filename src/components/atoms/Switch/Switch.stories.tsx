import React, { useState } from "react";
import Switch from "./Switch";

export default {
    title: "Atoms/Switch",
    component: Switch,
};

export const SwitchDefault = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Switch
            id="ux12"
            checked={checked}
            onClick={() => {
                setChecked(!checked);
            }}
            label="Click me to toggle"
        />
    );
};
