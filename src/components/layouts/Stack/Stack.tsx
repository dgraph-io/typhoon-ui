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
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { StackPropsType } from "./Stack.types";

const Stack = ({
    fullWidth,
    justify,
    inline,
    align,
    direction,
    gap,
    wrap = "wrap",
    styles: stylesProp = {},
    ...props
}: StackPropsType): JSX.Element => {
    const theme = useTheme();

    const styles = {
        ...(fullWidth ? { width: "100%" } : {}),
        display: inline ? "inline-flex" : "flex",
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        flexDirection: direction === "vertical" ? "column" : "row",
        "> * + *":
            direction === "vertical"
                ? {
                      marginTop: `{{space.${gap}}}`,
                      marginInlineStart: 0,
                  }
                : {
                      marginLeft: `{{space.${gap}}}`,
                  },
    };

    return (
        <div
            css={stylegun({
                css: { ...styles, ...stylesProp },
                theme,
                component: "Stack",
            })}
            {...props}
        />
    );
};

Stack.defaultProps = {
    gap: 0,
    direction: "horizontal",
};

export default Stack;
