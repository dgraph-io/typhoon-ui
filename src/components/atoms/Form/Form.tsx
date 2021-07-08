/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { FormPropsType } from "./Form.types";

const Form = React.forwardRef(
    (
        {
            fullWidth,
            styles: stylesProp = {},
            children,
            ...props
        }: FormPropsType,
        ref?: React.Ref<HTMLFormElement>
    ) => {
        const width = fullWidth ? "100%" : "auto";
        const theme = useTheme();
        return (
            <form
                css={stylegun({
                    css: {
                        width,
                        ...stylesProp,
                    },
                    theme,
                    component: "Form",
                })}
                ref={ref}
                {...props}
            >
                {children}
            </form>
        );
    }
);

export default Form;
