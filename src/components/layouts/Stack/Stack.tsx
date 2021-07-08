/** @jsx jsx */
import { jsx } from "@emotion/react";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { StackPropsType } from "./Stack.types";

const Stack = ({
    fullWidth,
    justify,
    inline,
    align,
    direction,
    gap,
    wrap = "wrap",
    styles: stylesProp = {},
    ...props
}: StackPropsType): JSX.Element => {
    const theme = useTheme();

    const styles = {
        ...(fullWidth ? { width: "100%" } : {}),
        display: inline ? "inline-flex" : "flex",
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        flexDirection: direction === "vertical" ? "column" : "row",
        "> * + *":
            direction === "vertical"
                ? {
                      marginTop: `{{space.${gap}}}`,
                      marginInlineStart: 0,
                  }
                : {
                      marginLeft: `{{space.${gap}}}`,
                  },
    };

    return (
        <div
            css={stylegun({
                css: { ...styles, ...stylesProp },
                theme,
                component: "Stack",
            })}
            {...props}
        />
    );
};

Stack.defaultProps = {
    gap: 0,
    direction: "horizontal",
};

export default Stack;
