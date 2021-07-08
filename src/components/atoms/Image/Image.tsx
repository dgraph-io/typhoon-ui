/** @jsx jsx */
import { jsx } from "@emotion/react";

import { styles } from "./Image.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { ImagePropsType } from "./Image.types";

const Image = ({
    fullWidth = true,
    alt,
    src,
    styles: stylesProp = {},
    ...props
}: ImagePropsType): JSX.Element => {
    const theme = useTheme();

    let width = fullWidth ? "100%" : "auto";

    return (
        <img
            alt={alt}
            src={src}
            css={stylegun({
                css: { ...styles.Image, width, ...stylesProp },
                theme,
                component: "Image",
            })}
            {...props}
        />
    );
};

export default Image;
