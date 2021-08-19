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

/** @jsx jsx */
import { jsx } from "@emotion/react";

import { styles } from "./Divider.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { DividerPropsType } from "./Divider.types";

const Divider = ({
    variant = "solid",
    width = "100%",
    styles: stylesProp = {},
    ...props
}: DividerPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <hr
            css={stylegun({
                css: { ...styles.Divider, width, ...stylesProp },
                theme,
                component: "Divider",
                variant,
            })}
            {...props}
        />
    );
};

export default Divider;
