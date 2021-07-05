import { Stack } from "components";
import React from "react";
import Paginator from "./Paginator";

export default {
    title: "Molecules/Paginator",
    component: Paginator,
};

export const Default = () => (
    <Stack direction="vertical" gap={2}>
        <Paginator
            total={200}
            offset={0}
            size={10}
            sizeRange={[10, 20, 30, 40]}
            onChange={value => console.log(value)}
        />
        <Paginator
            total={200}
            offset={190}
            size={10}
            sizeRange={[10, 20, 30, 40]}
            onChange={value => console.log(value)}
        />
        <Paginator
            total={200}
            offset={30}
            size={10}
            sizeRange={[10, 20, 30, 40]}
            onChange={value => console.log(value)}
        />
    </Stack>
);
