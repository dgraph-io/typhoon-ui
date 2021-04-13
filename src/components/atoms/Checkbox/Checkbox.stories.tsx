import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { FocusVisibleManager } from "hooks/useFocusVisible";

export default {
    title: "Atoms/Checkbox",
    component: Checkbox,
};

export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(true);

    return (
        <FocusVisibleManager>
            <Checkbox
                label={"Click me to toggle"}
                id="checkbox"
                checked={checked}
                onClick={() => {
                    setChecked(!checked);
                }}
            />
        </FocusVisibleManager>
    );
};

export const CheckboxUnchecked = () => <Checkbox id="checkbox" />;

export const CheckboxChecked = () => <Checkbox checked id="checkbox" />;
