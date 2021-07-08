/**@jsx jsx */
import { jsx } from "@emotion/react";
import { stylegun } from "helpers/stylegun";
import { styles } from "./Table.styles";
import { useTheme } from "hooks/useTheme";
import { TableHeadingPropsType } from "./Table.types";

import { Text } from "components";

const TableHeading = ({
    children,
    styles: stylesProp = {},
    ...props
}: TableHeadingPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <th
            css={stylegun({
                css: {
                    ...styles.TableHeading,
                    ...stylesProp,
                },
                theme,
                component: "TableHeading",
            })}
            {...props}
        >
            <Text color="grey" variant={2} weight={600}>
                {children}
            </Text>
        </th>
    );
};

export default TableHeading;
