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
import { styles } from "./Avatar.styles";

import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { AvatarPropsType } from "./Avatar.types.js";

import { Stack, Text } from "components";

const Avatar = ({
    variant = 4,
    round = true,
    text,
    bgColor = "black",
    src = "https://svgshare.com/i/QA1.svg",
    color = "white",
    styles: stylesProp = {},
}: AvatarPropsType): JSX.Element => {
    const theme = useTheme();
    return (
        <Stack
            styles={stylegun({
                css: {
                    ...styles.Avatar,
                    ...(round ? styles.Round : {}),
                    backgroundColor: text ? bgColor : {},
                    ...stylesProp,
                },
                component: "Avatar",
                theme,
                variant,
            })}
        >
            {text ? (
                <Text
                    variant={5}
                    weight={600}
                    styles={stylegun({
                        css: {
                            ...styles.Text,
                            color,
                        },
                        theme,
                    })}
                >
                    {text}
                </Text>
            ) : (
                <img
                    src={src}
                    alt="avatar"
                    css={stylegun({
                        css: {
                            ...styles.Image,
                            ...(round ? styles.Round : {}),
                        },
                        theme,
                    })}
                />
            )}
        </Stack>
    );
};

export default Avatar;
