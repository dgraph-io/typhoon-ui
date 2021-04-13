import React, { useState } from "react";
import Select from "./Select";
import { FocusVisibleManager } from "hooks/useFocusVisible";
import { SelectType } from "./Select.types";

export default {
    title: "Molecules/Select",
    component: Select,
};

export const SelectControlled = () => {
    const [selected, setSelected] = useState(null);

    return (
        <FocusVisibleManager>
            <Select
                label={"Select an option"}
                selected={selected}
                onSelect={({ value }: SelectType) => {
                    setSelected(value);
                }}
                values={Array(15)
                    .fill(0)
                    .map((x, index) => ({
                        label: `Option ${index}`,
                        value: `option${index}`,
                        id: `op${index}`,
                    }))}
            />
        </FocusVisibleManager>
    );
};

export const SelectLongName = () => {
    const [selected, setSelected] = useState({
        label: "It is going to be a long long long long option",
    });

    return (
        <FocusVisibleManager>
            <Select
                styles={{
                    width: "100px",
                }}
                label={"Select an option"}
                selected={selected}
                onSelect={({ value }: SelectType) => {
                    setSelected(value);
                }}
                values={Array(15)
                    .fill(0)
                    .map((x, index) => ({
                        label: `It is going to be a long long long long option ${index}`,
                        value: `option${index}`,
                        id: `op${index}`,
                    }))}
            />
        </FocusVisibleManager>
    );
};
