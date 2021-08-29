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
    CheckboxLabelContainer: {
        cursor: "pointer",
    },
    CheckboxInput: {
        position: "absolute",
        size: 0,
        clip: "rect(0,0,0,0)",
        margin: 0,
        borderRadius: 2,
        border: 0,
        opacity: 0,
        pointerEvents: "none",
    },

    CheckboxSvg: {
        cursor: "pointer",
        size: 3,
    },
    Disabled: { filter: "grayscale(1)", opacity: 0.7, pointerEvents: "none" },
};
