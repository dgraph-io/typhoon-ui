import { useState } from "react";

export const useTabs = (defaultSelected: string) => {
    const [selected, setSelected] = useState(defaultSelected);

    return {
        onSelect: (id: string) => {
            setSelected(id);
        },
        selected,
    };
};
