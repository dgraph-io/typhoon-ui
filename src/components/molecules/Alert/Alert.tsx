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
import { Stack, Heading, Text, Card } from "components";
import { AlertPropsType } from "./Alert.types";
import { ReactComponent as InfoIcon } from "./svgs/info.svg";
import { ReactComponent as WarningIcon } from "./svgs/warning.svg";
import { ReactComponent as ErrorIcon } from "./svgs/error.svg";
import { ReactComponent as SuccessIcon } from "./svgs/success.svg";
import { ReactComponent as TipIcon } from "./svgs/tip.svg";
import { stylegun } from "helpers/stylegun";
import Container from "components/layouts/Container/Container";

import { styles } from "./Alert.styles";
import { useTheme } from "hooks/useTheme";

const AlertIcons = {
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    success: SuccessIcon,
    tip: TipIcon,
};

const ICON_SIZE = "32px";

const Alert = ({
    variant = "info",
    heading,
    children,
    styles: stylesProp = {},
}: AlertPropsType): JSX.Element => {
    const AlertIcon = AlertIcons[variant];
    const theme = useTheme();

    const AlertStyles = stylegun({
        theme,
        component: "Alert",
        variant,
    });

    return (
        <Card
            styles={{
                ...styles.AlertStyles,
                ...AlertStyles,
                ...stylesProp,
            }}
        >
            <Stack
                direction="horizontal"
                gap={2}
                align="center"
                styles={{ flexWrap: "unset" }}
            >
                <Container styles={{ size: ICON_SIZE }}>
                    <AlertIcon height={ICON_SIZE} width={ICON_SIZE} />
                </Container>

                <Stack
                    direction="vertical"
                    justify="center"
                    styles={{ width: `calc(100% - ${ICON_SIZE})` }}
                >
                    {heading && (
                        <Heading color={AlertStyles.color} variant={4}>
                            {heading}
                        </Heading>
                    )}
                    {children && typeof children === "string" ? (
                        <Text
                            color={AlertStyles.color}
                            weight={400}
                            variant={3}
                        >
                            {children}
                        </Text>
                    ) : (
                        children
                    )}
                </Stack>
            </Stack>
        </Card>
    );
};

export default Alert;
