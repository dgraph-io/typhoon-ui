import React, { useState } from "react";
import { Slider, Stack, Container, Text } from "components";

export default {
    title: "Molecules/Slider",
    component: Slider,
};

export const SliderDefault = () => {
    const [value, setValue] = useState(100);
    return (
        <Stack direction="vertical" gap={4}>
            <Slider
                label="Slider Example"
                max={1000}
                min={1}
                minLabel="1 GB"
                maxLabel="1000 GB"
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                }}
            />

            <Container>
                <Text>Value : {value}</Text>
            </Container>
        </Stack>
    );
};
