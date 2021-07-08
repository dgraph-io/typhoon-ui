/**@jsx jsx */
import { jsx } from "@emotion/react";
import { stylegun } from "helpers/stylegun";
import { styles } from "./Table.styles";
import { useTheme } from "hooks/useTheme";
import { TableBodyPropsType } from "./Table.types";

const TableBody = ({
    children,
    styles: stylesProp = {},
    ...props
}: TableBodyPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <tbody
            css={stylegun({
                css: {
                    ...styles.TableBody,
                    ...stylesProp,
                },
                theme,
            })}
            {...props}
        >
            {children}
        </tbody>
    );
};

export default TableBody;
