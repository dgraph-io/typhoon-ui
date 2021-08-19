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
import React from "react";
import { jsx } from "@emotion/react";
import { styles } from "./Button.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { ButtonPropsType } from "./Button.types";

const Button = React.forwardRef(
    (
        {
            fullWidth,
            variant = "yell",
            styles: stylesProp = {},
            children,
            ...props
        }: ButtonPropsType,
        ref?: React.Ref<HTMLButtonElement>
    ) => {
        const width = fullWidth ? "100%" : "auto";
        const theme = useTheme();
        return (
            <button
                css={stylegun({
                    css: {
                        ...styles.Button,
                        ":focus-visible" : styles.FocusedButton,
                        width,
                        ...stylesProp,
                    },
                    theme,
                    component: "Button",
                    variant,
                })}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;
