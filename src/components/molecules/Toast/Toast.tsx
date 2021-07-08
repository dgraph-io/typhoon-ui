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
                                style={styles.CrossIcon}
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
