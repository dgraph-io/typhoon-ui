/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { styles } from "./Input.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { InputPropsType } from "./Input.types";

const Input = React.forwardRef(
    (
        {
            fullWidth = false,
            variant = "small",
            styles: stylesProp = {},
            ...props
        }: InputPropsType,
        ref?: React.Ref<HTMLInputElement>
    ) => {
        let width = fullWidth ? "100%" : "auto";
        const theme = useTheme();
        return (
            <input
                css={stylegun({
                    css: { width, ...styles.Input, ...stylesProp },
                    theme,
                    component: "Input",
                    variant,
                })}
                {...props}
                ref={ref}
            />
        );
    }
);

export default Input;
