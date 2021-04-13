
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SliderProps } from "./Slider.types";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { styles } from "./Slider.styles";

import { Text, Stack } from "components";

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
}: SliderProps) => {
    const theme = useTheme();

    return (
        <Stack direction="vertical">
            {label && <Text>{label}</Text>}
            <Stack gap={2} fullWidth={true} align="center">
                {minLabel && <Text>{minLabel}</Text>}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={onChange}
                    onMouseUp={onMouseUp}
                    step={step}
                    css={stylegun({
                        css: {
                            ...styles.Slider,
                            ...stylesProp,
                        },
                        theme,
                        component: "Slider",
                    })}
                ></input>

                {maxLabel && <Text>{maxLabel}</Text>}
            </Stack>
        </Stack>
    );
};

export default Slider;
