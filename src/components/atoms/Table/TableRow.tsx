/**@jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { styles } from "./Table.styles";
import { useTheme } from "hooks/useTheme";
import { stylegun } from "helpers/stylegun";
import { TableRowPropsType } from "./Table.types";

const TableRow = React.forwardRef(
    (
        {
            children,
            styles: stylesProp = {},
            clickable = false,
            onClick,
            tabIndex,
            ...props
        }: TableRowPropsType,
        ref?: React.Ref<HTMLTableElement>
    ) => {
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
                tabIndex={tabIndex}
                ref={ref}
                {...props}
                {...(clickable ? { onClick } : {})}
            >
                {children}
            </tr>
        );
    }
);

export default TableRow;
