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
import { Stack, Heading, Card, Text, Button } from "components";
import { ToastPropsType } from "./Toast.types";

import { ReactComponent as InfoIcon } from "./svgs/info.svg";
import { ReactComponent as WarningIcon } from "./svgs/warning.svg";
import { ReactComponent as ErrorIcon } from "./svgs/error.svg";
import { ReactComponent as SuccessIcon } from "./svgs/success.svg";
import { ReactComponent as CrossIcon } from "./svgs/cross-icon.svg";
import { stylegun } from "helpers/stylegun";

import { useTheme } from "hooks/useTheme";
import { styles } from "./Toast.styles";
import { useEffect } from "react";

const ToastIcons = {
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    success: SuccessIcon,
};

const ICON_SIZE = "50px";
const CROSS_ICON_SIZE = "14px";

const Toast = ({
    heading,
    variant = "success",
    description,
    styles: stylesProp,
    permanent = false,
    onCloseToast,
}: ToastPropsType) => {
    const ToastIcon = ToastIcons[variant];
    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            if (onCloseToast && !permanent) {
                onCloseToast();
            }
        }, 5000);
    }, []);

    return (
        <Card
            styles={stylegun({
                css: {
                    ...styles.ToastStyles,
                    ...stylesProp,
                },
                theme,
            })}
        >
            <Stack align="center" justify="space-between">
                <Stack gap={1} justify="center">
                    <ToastIcon height={ICON_SIZE} width={ICON_SIZE} />
                    <Stack direction="vertical" justify="center">
                        {heading && <Heading variant={4}>{heading}</Heading>}
                        {description && <Text color="grey">{description}</Text>}
                    </Stack>
                </Stack>
                <Stack gap={1} styles={{ marginLeft: 2 }}>
                    {onCloseToast && (
                        <Button styles={styles.CloseButton}>
                            <CrossIcon
                                height={CROSS_ICON_SIZE}
                                width={CROSS_ICON_SIZE}
                                style={{
                                    cursor: "pointer",
                                    marginRight: 1,
                                }}
                                onClick={onCloseToast}
                            />
                        </Button>
                    )}
                </Stack>
            </Stack>
        </Card>
    );
};

export default Toast;
