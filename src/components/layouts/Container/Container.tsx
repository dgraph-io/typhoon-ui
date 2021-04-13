/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { ContainerPropsType } from "./Container.types";

const Container = React.forwardRef(
    (
        {
            fullWidth = false,
            styles: stylesProp = {},
            ...props
        }: ContainerPropsType,
        ref?: React.Ref<any>
    ): JSX.Element => {
        const theme = useTheme();

        const styles = {
            ...(fullWidth ? { width: "100%" } : {}),
        };

        return (
            <div
                css={stylegun({
                    css: { ...styles, ...stylesProp },
                    theme,
                })}
                ref={ref}
                {...props}
            />
        );
    }
);

export default Container;
