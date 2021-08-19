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
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { FormPropsType } from "./Form.types";

const Form = React.forwardRef(
    (
        {
            fullWidth,
            styles: stylesProp = {},
            children,
            ...props
        }: FormPropsType,
        ref?: React.Ref<HTMLFormElement>
    ) => {
        const width = fullWidth ? "100%" : "auto";
        const theme = useTheme();
        return (
            <form
                css={stylegun({
                    css: {
                        width,
                        ...stylesProp,
                    },
                    theme,
                    component: "Form",
                })}
                ref={ref}
                {...props}
            >
                {children}
            </form>
        );
    }
);

export default Form;
