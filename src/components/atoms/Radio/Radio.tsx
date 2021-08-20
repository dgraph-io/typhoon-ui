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
import { styles } from "./Radio.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { RadioPropsType } from "./Radio.types";

import { Text, Stack } from "components";

const Radio = ({
    checked,
    label,
    styles: stylesProp = {},
    ...props
}: RadioPropsType): JSX.Element => {
    const theme = useTheme();

    return (
        <label
            css={stylegun({
                css: { ...styles.Radio, ...stylesProp },
                theme,
                component: "Radio",
            })}
        >
            <Stack gap={1} align="center" wrap="nowrap" fullWidth={true}>
                <div
                    css={stylegun({
                        css: {
                            ...(checked
                                ? styles.RadioChecked
                                : styles.RadioUnchecked),
                            ":focus-visible": styles.FocusedRadio,
                        },
                        theme,
                    })}
                />
                <Text
                    styles={{
                        width: "calc(100% - {{space.3}})",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {label}
                </Text>
                <input
                    type="radio"
                    checked={checked}
                    css={{
                        position: "absolute",
                        size: 0,
                        clip: "rect(0,0,0,0)",
                        margin: 0,
                        border: 0,
                        opacity: 0,
                        pointerEvents: "none",
                    }}
                    {...props}
                />
            </Stack>
        </label>
    );
};

export default Radio;
