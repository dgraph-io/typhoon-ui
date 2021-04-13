import React, { useState } from "react";

import { Button, Select, Navbar, NavbarLogo } from "components";

export default {
    title: "Molecules/Navbar",
    component: Navbar,
};

interface SelectValueType {
    value: any;
}

export const NavbarStory = () => {
    const [selected, setSelected] = useState(null);

    return (
        <Navbar>
            <NavbarLogo alt="slash-logo" src="/slash-logo.svg" />

            <Select
                fullWidth
                label={"Select your backend"}
                selected={selected}
                onSelect={({ value }: SelectValueType) => {
                    setSelected(value);
                }}
                values={Array(4)
                    .fill(0)
                    .map((x, index) => ({
                        label: `Option ${index}`,
                        value: `option${index}`,
                        id: `op${index}`,
                    }))}
            />

            <Button variant="ghost">Launch New Backend</Button>
        </Navbar>
    );
};
