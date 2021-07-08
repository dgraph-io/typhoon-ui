/** @jsx jsx */
import { jsx } from "@emotion/react";

import { styles } from "./Divider.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { DividerPropsType } from "./Divider.types";

const Divider = ({
    variant = "solid",
    width = "100%",
    styles: stylesProp = {},
    ...props
}: DividerPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <hr
            css={stylegun({
                css: { ...styles.Divider, width, ...stylesProp },
                theme,
                component: "Divider",
                variant,
            })}
            {...props}
        />
    );
};

export default Divider;
