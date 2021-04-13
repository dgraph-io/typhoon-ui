import React, { useState } from "react";
import Radio from "./Radio";
import { FocusVisibleManager } from "hooks/useFocusVisible";

export default {
    title: "Atoms/Radio",
    component: Radio,
};

export const RadioControlled = () => {
    const [checked, setChecked] = useState(true);

    return (
        <FocusVisibleManager>
            <Radio
                label={"Click me to toggle"}
                checked={checked}
                onChange={() => {
                    setChecked(!checked);
                }}
                id="radio"
            />
        </FocusVisibleManager>
    );
};

export const RadioUnchecked = () => <Radio id="radio" />;

export const RadioChecked = () => <Radio id="radio" checked={true} />;
