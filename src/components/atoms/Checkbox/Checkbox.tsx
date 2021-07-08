/** @jsx jsx */
import { jsx } from "@emotion/react";
import { styles } from "./Checkbox.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { ReactComponent as Checked } from "./svgs/checked.svg";
import { ReactComponent as Unchecked } from "./svgs/unchecked.svg";

import { Stack, Text } from "components";
import { CheckboxPropsType } from "./Checkbox.types";

const Checkbox = ({
    checked,
    label,
    disabled = false,
    styles: stylesProp = {},
    ...props
}: CheckboxPropsType): JSX.Element => {
    const theme = useTheme();
    const CheckboxSvgStyles = stylegun({
        css: styles.CheckboxSvg,
        theme,
    });

    const CheckboxLabelStyles = stylegun({
        css: {
            ...styles.CheckboxLabelContainer,
            ...(disabled ? styles.Disabled : {}),
            ...stylesProp,
            ":focus-visible": styles.FocusedCheckbox,
        },
        theme,
        component: "Checkbox",
    });

    return (
        <label css={CheckboxLabelStyles}>
            <input
                type="checkbox"
                css={stylegun({ css: styles.CheckboxInput, theme })}
                {...props}
            />
            <Stack gap={1} align="center" wrap="nowrap">
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
