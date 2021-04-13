/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SwitchPropsType } from "./Switch.types";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { Text, Stack } from "components";
import { styles } from "./Switch.styles";

const Switch = ({
    checked,
    label,
    styles: stylesProp = {},
    disabled = false,
    ...props
}: SwitchPropsType) => {
    const theme = useTheme();

    const SwitchLabelStyles = stylegun({
        css: {
            ...styles.SwitchLabel,
            ...(disabled ? styles.Disabled : {}),
            ...stylesProp,
        },
        theme,
        component: "Switch",
    });

    const SwitchSliderStyles = stylegun({
        css: styles.SwitchSlider,
        theme,
    });

    return (
        <label css={SwitchLabelStyles}>
            <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                css={stylegun({
                    css: styles.SwitchInput,
                    theme,
                })}
                {...props}
            />
            <Stack align="center" gap={1}>
                <span css={SwitchSliderStyles}>
                    {checked && (
                        <Text
                            styles={styles.SwitchOn}
                            weight={500}
                            color="white"
                            variant={1}
                        >
                            ON
                        </Text>
                    )}
                    {!checked && (
                        <Text
                            styles={styles.SwitchOff}
                            weight={500}
                            variant={1}
                        >
                            OFF
                        </Text>
                    )}
                </span>

                {label && <Text>{label}</Text>}
            </Stack>
        </label>
    );
};

export default Switch;
