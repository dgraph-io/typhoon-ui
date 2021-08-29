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
    Left: {
        width: 1,
        height: 1,
        borderBottom: "2px solid {{colors.grey}} ",
        borderLeft: "2px solid {{colors.grey}} ",
        transform: "rotate(45deg)",
    },
    Right: {
        width: 1,
        height: 1,
        borderBottom: "2px solid {{colors.grey}} ",
        borderRight: "2px solid {{colors.grey}} ",
        transform: "rotate(-45deg)",
    },
    Button: {
        height: "unset",
        padding: 0,
        size: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};
