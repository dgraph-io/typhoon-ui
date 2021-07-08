import React, { useState } from "react";
import Radio from "./Radio";


export default {
    title: "Atoms/Radio",
    component: Radio,
};

export const RadioControlled = () => {
    const [checked, setChecked] = useState(true);

    return (
        
            <Radio
                label={"Click me to toggle"}
                checked={checked}
                onChange={() => {
                    setChecked(!checked);
                }}
                id="radio"
            />
        
    );
};

export const RadioUnchecked = () => <Radio id="radio" />;

export const RadioChecked = () => <Radio id="radio" checked={true} />;
