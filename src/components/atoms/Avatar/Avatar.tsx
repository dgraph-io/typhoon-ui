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
                theme,
                component: "Avatar",
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
