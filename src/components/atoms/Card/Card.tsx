/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";

import { styles } from "./Card.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { CardPropsType } from "./Card.types";

const Card = React.forwardRef(
    (
        {
            styles: stylesProp = {},
            clickable = false,
            children,
            ...props
        }: CardPropsType,
        ref?: any
    ) => {
        const theme = useTheme();
        const Element = clickable ? "button" : "div";
        return (
            <Element
                ref={ref}
                css={stylegun({
                    css: {
                        ...styles.Card,
                        cursor: clickable ? "pointer" : "unset",
                        ...(clickable
                            ? { ":focus-visible": styles.FocusedCard }
                            : {}),
                        ...stylesProp,
                    },
                    theme,
                    component: "Card",
                })}
                {...props}
            >
                {children}
            </Element>
        );
    }
);

export default Card;
