import React from "react";
import Card from "./Card";
import { Stack, Heading, Text } from "components";

export default {
    title: "Atoms/Card",
    component: Card,
};

export const Default = () => (
    <Card>
        <Stack direction="vertical" gap={2}>
            <Heading>Heading</Heading>
            <Text>Description</Text>
        </Stack>
    </Card>
);
