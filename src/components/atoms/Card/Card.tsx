/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";

import { styles } from "./Card.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { useFocusVisible } from "hooks/useFocusVisible";

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
        const { focusVisible, ...handleFocus } = useFocusVisible();
        return (
            <Element
                ref={ref}
                css={stylegun({
                    css: {
                        ...styles.Card,
                        cursor: clickable ? "pointer" : "unset",
                        ...(clickable && focusVisible
                            ? styles.FocusedCard
                            : {}),
                        ...stylesProp,
                    },
                    theme,
                    component: "Card",
                })}
                {...(clickable ? handleFocus : {})}
                {...props}
            >
                {children}
            </Element>
        );
    }
);

export default Card;
