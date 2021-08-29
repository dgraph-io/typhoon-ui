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

import { StylesObject } from "../../../types";

export const styles: Record<string, StylesObject> = {
    SwitchLabel: {
        position: "relative",
    },
    SwitchSlider: {
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        width: 8,
        height: 4,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "grey.border",
        borderRadius: "64px",
        "::before": {
            position: "absolute",
            size: 3,
            left: "4px",
            bottom: "4px",
            content: '""',
            backgroundColor: "white",
            borderRadius: "50%",
            transition: "0.2s",
        },
    },
    SwitchInput: {
        opacity: 0,
        width: 0,
        height: 0,
        display: "none",

        "&:checked + div > span": {
            backgroundColor: "pink",
        },

        "&:checked + div > span::before": {
            transform: "translateX({{space.4}})",
        },
    },
    SwitchOn: {
        marginTop: 1,
        marginLeft: "12px",
    },
    SwitchOff: { marginLeft: 4, marginTop: 1 },
    Disabled: {
        pointerEvents: "none",
        filter: "grayscale(1)",
        opacity: 0.4,
        position: "relative",
    },
};
