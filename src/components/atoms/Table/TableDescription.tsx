/**@jsx jsx */
import { jsx } from "@emotion/core";

import { Text } from "components";
import { stylegun } from "helpers/stylegun";
import { styles } from "./Table.styles";
import { useTheme } from "hooks/useTheme";
import { TableDescriptionPropsType } from "./Table.types";

const TableDescription = ({
    children,
    styles: stylesProp = {},
    ...props
}: TableDescriptionPropsType): JSX.Element => {
    const theme = useTheme();

    return (
        <td
            css={stylegun({
                css: {
                    ...styles.TableDescription,
                    ...stylesProp,
                },
                theme,
                component: "TableDescription",
            })}
            {...props}
        >
            {typeof children === "string" ? (
                <Text styles={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                    {children}
                </Text>
            ) : (
                children
            )}
        </td>
    );
};

export default TableDescription;
