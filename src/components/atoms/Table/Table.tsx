 /** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { styles } from "./Table.styles";
import { TablePropsType } from "./Table.types";

const Table = ({
    styles: stylesProp = {},
    children,
    fullWidth = true,
    ...props
}: TablePropsType): JSX.Element => {
    const theme = useTheme();

    return (
        <table
            css={stylegun({
                css: {
                    ...styles.Table,
                    ...(fullWidth ? { width: "100%" } : {}),
                    ...stylesProp,
                },
                theme,
                component: "Table",
            })}
            {...props}
        >
            {children}
        </table>
    );
};

export default Table;
