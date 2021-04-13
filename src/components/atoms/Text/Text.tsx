/** @jsx jsx */
import { jsx } from "@emotion/core";

import { styles } from "./Text.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { TextPropsType } from "./Text.types";

const Text = ({
    variant = 3,
    weight,
    color = "grey.dark",
    styles: stylesProp = {},
    children,
    ...props
}: TextPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <div
            css={stylegun({
                css: {
                    ...styles.Text,
                    color,
                    fontWeight: weight,
                    ...stylesProp,
                },
                theme,
                component: "Text",
                variant,
            })}
            {...props}
        >
            {children}
        </div>
    );
};

export default Text;
