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

import React from "react";
import { Stack, Button } from "components";
import { useToast } from "hooks/useToast";

import Toast from "./Toast";
import { createToastContext, ToastManager } from "./ToastProvider";
import { noop } from "helpers/utils";

const ToastContext = createToastContext();

export default {
    title: "Molecules/Toast",
    component: Toast,
    decorators: [
        (Story: any) => (
            <ToastManager context={ToastContext}>
                <Story />
            </ToastManager>
        ),
    ],
};

export const DefaultToast = () => {
    return (
        <Stack direction="vertical" gap={2}>
            <Toast
                id="001"
                heading="Hello world"
                description="This is a description"
                variant="info"
                permanent={true}
                onCloseToast={noop}
            />
            <Toast
                id="002"
                heading="Hello world"
                description="This is a description"
                variant="warning"
                permanent={true}
            />
            <Toast
                id="003"
                heading="Hello world"
                description="This is a description"
                variant="success"
                permanent={true}
            />
            <Toast
                id="004"
                heading="Hello world"
                description="This is a description"
                variant="error"
                permanent={true}
            />
        </Stack>
    );
};

export const ToastAutoClose = () => {
    const { addToast } = useToast(ToastContext);
    return (
        <Stack>
            <Button
                onClick={() =>
                    addToast({
                        heading: "Hello world",
                        description: "This is a description",
                        variant: "success",
                    })
                }
            >
                Add Toast
            </Button>
        </Stack>
    );
};

export const PermanentToast = () => {
    const { addToast } = useToast(ToastContext);

    return (
        <Stack>
            <Button
                onClick={() =>
                    addToast({
                        heading: "Hello world",
                        description: "This is a description",
                        permanent: true,
                        variant: "info",
                    })
                }
            >
                Add Toast
            </Button>
        </Stack>
    );
};

export const ToastWarning = () => {
    const { addToast } = useToast(ToastContext);

    return (
        <Stack>
            <Button
                onClick={() =>
                    addToast({
                        heading: "Hello world",
                        description: "This is a description",
                        variant: "warning",
                    })
                }
            >
                Add Toast
            </Button>
        </Stack>
    );
};
