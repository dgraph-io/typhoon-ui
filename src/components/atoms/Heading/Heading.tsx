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

import { styles } from "./Heading.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { HeadingPropsType } from "./Heading.types";

const Heading = ({
    variant = 3,
    weight = 500,
    color,
    styles: stylesProp = {},
    children,
    ...props
}: HeadingPropsType) => {
    const theme = useTheme();
    const HX = "h3" || `h${variant}`;
    return (
        <HX
            css={stylegun({
                css: {
                    ...styles.Heading,
                    ...(color ? { color } : {}),
                    fontWeight: weight,
                    ...stylesProp,
                },
                theme,
                component: "Heading",
                variant,
            })}
            {...props}
        >
            {children}
        </HX>
    );
};

export default Heading;
