/** @jsx jsx */
import { jsx } from "@emotion/core";

import { styles } from "./Heading.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { HeadingPropsType } from "./Heading.types";

const Heading = ({
    variant = 3,
    weight = 500,
    color,
    styles: stylesProp = {},
    children,
    ...props
}: HeadingPropsType) => {
    const theme = useTheme();
    const HX = "h3" || `h${variant}`;
    return (
        <HX
            css={stylegun({
                css: {
                    ...styles.Heading,
                    ...(color ? { color } : {}),
                    fontWeight: weight,
                    ...stylesProp,
                },
                theme,
                component: "Heading",
                variant,
            })}
            {...props}
        >
            {children}
        </HX>
    );
};

export default Heading;
