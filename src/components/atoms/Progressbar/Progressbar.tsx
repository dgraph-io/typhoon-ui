/** @jsx jsx */
import { jsx } from "@emotion/core";

import { styles } from "./Progressbar.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { ProgressBarPropsType } from "./Progressbar.types";

const Progressbar = ({
    width = "100%",
    styles: stylesProp = {},
    fillStyles = {},
    progress = 0,
}: ProgressBarPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <div
            css={stylegun({
                css: { ...styles.ProgressbarContainer, width, ...stylesProp },
                theme,
            })}
        >
            <div
                css={stylegun({
                    css: {
                        ...styles.ProgressbarFill,
                        width: `${progress}%`,
                        ...fillStyles,
                    },
                    theme,
                })}
            />
        </div>
    );
};

export default Progressbar;
