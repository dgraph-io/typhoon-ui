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

export const styles = {
    Radio: {
        cursor: "pointer",
    },
    FocusedRadio: {
        boxShadow: "{{focus.boxShadow}}",
    },

    RadioUnchecked: {
        boxSizing: "content-box",
        cursor: "pointer",
        size: 2,
        border: "{{lineThickness.1}} solid {{colors.pink}}",
        borderRadius: 3,
    },
    RadioChecked: {
        boxSizing: "content-box",
        cursor: "pointer",
        size: 2,
        border: "{{lineThickness.1}} solid {{colors.pink}}",
        borderRadius: 3,
        position: "relative",
        ":after": {
            boxSizing: "content-box",
            content: '""',
            position: "absolute",
            size: 3,
            transform: "translate(-50%, -50%) scale(0.5)",
            top: "50%",
            left: "50%",
            borderRadius: 3,
            background: "pink",
        },
    },
};
