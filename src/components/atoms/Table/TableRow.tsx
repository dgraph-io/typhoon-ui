/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
