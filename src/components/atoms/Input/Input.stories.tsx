import React from "react";
import Input from "./Input";
import { Stack } from "components";

export default {
    title: "Atoms/Input",
    component: Input,
};

export const InputStory = () => (
    <Stack direction="vertical" gap={4} inline align="flex-start">
        <Input variant="small" placeholder="Small Input" />
        <Input disabled variant="small" placeholder="Disabled Input" />
        <Input variant="medium" placeholder="Medium Input" />
        <Input variant="large" placeholder="Large Input" />
    </Stack>
);
