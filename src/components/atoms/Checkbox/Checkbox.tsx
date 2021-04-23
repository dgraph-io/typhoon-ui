/** @jsx jsx */
import { jsx } from "@emotion/core";
import { styles } from "./Checkbox.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { ReactComponent as Checked } from "./svgs/checked.svg";
import { ReactComponent as Unchecked } from "./svgs/unchecked.svg";

import { Stack, Text } from "components";
// import { uuid } from "helpers/utils";

import { useFocusVisible } from "hooks/useFocusVisible";
import { CheckboxPropsType } from "./Checkbox.types";

const Checkbox = ({
    checked,
    label,
    styles: stylesProp = {},
    ...props
}: CheckboxPropsType): JSX.Element => {
    const theme = useTheme();
    const { focusVisible, ...handleFocus } = useFocusVisible();
    const CheckboxSvgStyles = stylegun({
        css: styles.CheckboxSvg,
        theme,
    });

    const CheckboxLabelStyles = stylegun({
        css: {
            ...styles.CheckboxLabelContainer,
            ...(focusVisible ? styles.FocusedCheckbox : {}),
            ...stylesProp,
        },
        theme,
        component: "Checkbox",
    });

    return (
        <label css={CheckboxLabelStyles}>
            <input
                type="checkbox"
                css={stylegun({ css: styles.CheckboxInput, theme })}
                {...handleFocus}
                {...props}
            />
            <Stack gap={1} align="center">
                {checked ? (
                    <Checked css={CheckboxSvgStyles} />
                ) : (
                    <Unchecked css={CheckboxSvgStyles} />
                )}
                {label && <Text>{label}</Text>}
            </Stack>
        </label>
    );
};

export default Checkbox;
