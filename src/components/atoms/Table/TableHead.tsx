/**@jsx jsx */
import { jsx } from "@emotion/react";
import { stylegun } from "helpers/stylegun";
import { styles } from "./Table.styles";
import { useTheme } from "hooks/useTheme";
import { TableHeadPropsType } from "./Table.types";

const TableHead = ({
    children,
    align = "left",
    styles: stylesProp = {},
    ...props
}: TableHeadPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <thead
            css={stylegun({
                css: {
                    ...styles.TableHead,
                    ...stylesProp,
                    textAlign: align,
                },
                theme,
                component: "TableHead",
            })}
            {...props}
        >
            {children}
        </thead>
    );
};

export default TableHead;
