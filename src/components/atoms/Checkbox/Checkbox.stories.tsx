import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default {
    title: "Atoms/Checkbox",
    component: Checkbox,
};

export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(true);

    return (
        <Checkbox
            label={"Click me to toggle"}
            id="checkbox"
            checked={checked}
            onClick={() => {
                setChecked(!checked);
            }}
        />
    );
};

export const CheckboxUnchecked = () => <Checkbox id="checkbox" />;

export const CheckboxChecked = () => <Checkbox checked id="checkbox" />;
