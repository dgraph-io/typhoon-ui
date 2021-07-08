/** @jsx jsx */
import { jsx } from "@emotion/react";
import { styles } from "./Radio.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { useFocusVisible } from "hooks/useFocusVisible";
import { RadioPropsType } from "./Radio.types";

import { Text, Stack } from "components";

const Radio = ({
    checked,
    label,
    styles: stylesProp = {},
    ...props
}: RadioPropsType): JSX.Element => {
    const theme = useTheme();
    const { focusVisible, ...handleFocus } = useFocusVisible();

    return (
        <label
            css={stylegun({
                css: { ...styles.Radio, ...stylesProp },
                theme,
                component: "Radio",
            })}
        >
            <Stack gap={1} align="center" wrap="nowrap" fullWidth={true}>
                <div
                    css={stylegun({
                        css: {
                            ...(checked
                                ? styles.RadioChecked
                                : styles.RadioUnchecked),
                            ...(focusVisible ? styles.FocusedRadio : {}),
                        },
                        theme,
                    })}
                />
                <Text
                    styles={{
                        width: "calc(100% - {{space.3}})",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {label}
                </Text>
                <input
                    type="radio"
                    checked={checked}
                    css={styles.RadioInput}
                    {...handleFocus}
                    {...props}
                />
            </Stack>
        </label>
    );
};

export default Radio;
