import React from "react";
import Button from "./Button";
import { Stack } from "components";
import { FocusVisibleManager } from "hooks/useFocusVisible";

export default {
    title: "Atoms/Button",
    component: Button,
};

export const LoudnessScale = () => (
    <FocusVisibleManager>
        <Stack direction="horizontal" gap={1} inline align="flex-start">
            <Button variant="scream">Scream</Button>
            <Button variant="yell">Yell</Button>
            <Button variant="cheer">Cheer</Button>
            <Button variant="murmur">Murmur</Button>
            <Button variant="whistle">Whistle</Button>
            <Button variant="ghost">Ghost</Button>
        </Stack>
    </FocusVisibleManager>
);
