/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SliderProps } from "./Slider.types";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { styles } from "./Slider.styles";

import { Text, Stack } from "components";
import { useCallback } from "react";

const Slider = ({
    min,
    max,
    value,
    onChange,
    onMouseUp,
    styles: stylesProp = {},
    label,
    minLabel,
    maxLabel,
    step,
    disabled = false,
}: SliderProps) => {
    const theme = useTheme();
    const onChangeWithEventPersisted = useCallback(
        e => {
            e.persist();
            onChange(e);
        },
        [onChange]
    );
    return (
        <Stack direction="vertical" styles={stylesProp}>
            {label && <Text>{label}</Text>}
            <Stack gap={1} fullWidth={true} align="center">
                {minLabel && (
                    <Text variant={1} color="grey" weight={500}>
                        {minLabel}
                    </Text>
                )}
                <input
                    disabled={disabled}
                    type="range"
                    min={min}
                    max={max}
                    defaultValue={value}
                    onChange={onChangeWithEventPersisted}
                    onMouseUp={onMouseUp}
                    step={step}
                    css={stylegun({
                        css: {
                            ...styles.Slider,
                        },
                        theme,
                        component: "Slider",
                    })}
                ></input>

                {maxLabel && (
                    <Text variant={1} color="grey" weight={500}>
                        {maxLabel}
                    </Text>
                )}
            </Stack>
        </Stack>
    );
};

export default Slider;
