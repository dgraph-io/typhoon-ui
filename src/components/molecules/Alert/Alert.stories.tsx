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
import Alert from "./Alert";

export default {
    title: "Molecules/Alert",
    component: Alert,
};

export const AlertDefault = () => {
    return (
        <Alert heading="Did you know?">
            Here is something that you might like to know
        </Alert>
    );
};

export const AlertWarning = () => {
    return (
        <Alert variant="warning" heading="Are you sure you want to leave?">
            Your information has not been saved.
        </Alert>
    );
};

export const AlertSuccess = () => {
    return (
        <Alert variant="success" heading="Yay! Everything worked!">
            Congrats on the internet loading your request.
        </Alert>
    );
};

export const AlertError = () => {
    return (
        <Alert variant="error" heading="Uh oh, something went wrong">
            Sorry! There was a problem with your request.
        </Alert>
    );
};

export const AlertTip = () => {
    return (
        <Alert variant="tip" heading="Here is a tip">
            Here are some tips.
        </Alert>
    );
};
