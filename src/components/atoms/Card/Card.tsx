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
import React from "react";

import { styles } from "./Card.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { CardPropsType } from "./Card.types";

const Card = React.forwardRef(
    (
        {
            styles: stylesProp = {},
            clickable = false,
            children,
            ...props
        }: CardPropsType,
        ref?: any
    ) => {
        const theme = useTheme();
        const Element = clickable ? "button" : "div";
        return (
            <Element
                ref={ref}
                css={stylegun({
                    css: {
                        ...styles.Card,
                        cursor: clickable ? "pointer" : "unset",
                        ...(clickable
                            ? { ":focus-visible": styles.FocusedCard }
                            : {}),
                        ...stylesProp,
                    },
                    theme,
                    component: "Card",
                })}
                {...props}
            >
                {children}
            </Element>
        );
    }
);

export default Card;
