import React from "react";
import Text from "./Text";
import Stack from "../../layouts/Stack/Stack";

export default {
    title: "Atoms/Text",
    component: Text,
};

export const Sizes = () => (
    <Stack direction="vertical" gap={2}>
        <Text>Default typography</Text>
        <Text color="pink" weight={600}>
            With color
        </Text>
        <Text color="pink" weight={600}>
            With color and weight
        </Text>
        <Text variant={1}>Variant 1 size</Text>
        <Text variant={2}>Variant 2 size</Text>
        <Text variant={3}>Variant 3 size</Text>
        <Text variant={4}>
            Bigger variant of text? Checkout heading, will be a better option
            symantic wise.
        </Text>
    </Stack>
);
