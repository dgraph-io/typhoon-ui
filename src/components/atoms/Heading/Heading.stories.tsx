import React from "react";
import Heading from "./Heading";
import { Stack } from "components";

export default {
    title: "Atoms/Heading",
    component: Heading,
};

export const Sizes = () => (
    <Stack direction="vertical" gap={2}>
        <Heading>This is Default (H3)</Heading>
        <Heading variant={1}>This is H1 - Only one in the entire page</Heading>
        <Heading variant={2}>This is H2 - Sub section of a page</Heading>
        <Heading variant={3}>
            This is H3 - Article level/ Modal heading/ Card header
        </Heading>
        <Heading variant={4}>This is H4 - At form level division</Heading>
        <Heading variant={3} color="pink">
            H3 in pink
        </Heading>
        <Heading variant={3} color="pink" weight={300}>
            H3 in pink with 100 weight
        </Heading>
    </Stack>
);
