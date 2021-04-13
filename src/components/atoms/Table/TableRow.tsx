/**@jsx jsx */
import { jsx } from "@emotion/core";

import { styles } from "./Table.styles";
import { useTheme } from "hooks/useTheme";
import { stylegun } from "helpers/stylegun";
import { TableRowPropsType } from "./Table.types";

const TableRow = ({
    children,
    styles: stylesProp = {},
    clickable = false,
    onClick,
    ...props
}: TableRowPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <tr
            css={stylegun({
                css: {
                    ...styles.TableRow,
                    ...(clickable ? { cursor: "pointer" } : {}),
                    ...stylesProp,
                },
                theme,
                component: "TableRow",
            })}
            {...props}
            {...(clickable ? { onClick } : {})}
        >
            {children}
        </tr>
    );
};

export default TableRow;
