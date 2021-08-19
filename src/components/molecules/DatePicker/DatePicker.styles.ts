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

const UnderLinePseudoElement = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "pink",
    content: `""`,
    size: 3,
    borderBottom: "2px solid {{colors.grey.light}}",
    fontWeight: 600,
};
export const styles = {
    Box: {
        size: 5,
        textAlign: "center",
        padding: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    DateInput: {
        fontSize: 2,
        width: "100px",
        textAlign: "center",
        padding: 1,
    },
    ActionButton: {
        height: "fit-content",
    },
    Date: {
        position: "relative",
        borderRadius: 3,
        background: "transparent",
        color: "black",
        padding: 0,
        fontWeight: 500,
        ":hover": {
            borderRadius: 3,
            border: "{{lineThickness.2}} solid {{colors.pink.light}}",
        },
        ":disabled:hover": {
            border: "none",
        },
    },
    SelectedDate: {
        borderRadius: 3,
        background: "pink",
        color: "white",
        border: "{{lineThickness.2}} solid {{colors.pink}}",
        ":hover": {
            borderRadius: 3,
            border: "{{lineThickness.2}} solid {{colors.pink}}",
        },
        "::after": {
            ...UnderLinePseudoElement,
            borderColor: "transparent",
        },
    },
    OtherMonth: {
        color: "grey.light",
    },
    InBetweenDate: {
        "::before": {
            position: "absolute",
            size: 5,
            content: `""`,
            background: "pink.translucent",
        },
        "::after": {
            borderColor: "transparent",
        },
        ":hover": {
            border: "{{lineThickness.2}} solid {{colors.pink}}",
        },
    },
    TrailingRight: {
        "::before": {
            borderRadius: 3,
            borderRightRadius: 0,
            position: "absolute",
            size: 5,
            content: `""`,
            background: "pink.translucent",
        },
    },
    TrailingLeft: {
        "::before": {
            borderRadius: 3,
            borderLeftRadius: 0,
            position: "absolute",
            size: 5,
            content: `""`,
            background: "pink.translucent",
        },
    },

    Today: {
        position: "relative",
        "::after": UnderLinePseudoElement,
    },
    InputStyles: {
        border: 0,
        width: 5,
        padding: 1,
        "::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
        },
        fontWeight: 600,
    },
    ChevronStyles: {
        marginLeft: 1,
        width: 1,
        height: 1,
        borderBottom: "2px solid {{colors.grey}} ",
        borderRight: "2px solid {{colors.grey}} ",
        cursor: "pointer",
        opacity: 0.7,
        ":hover": {
            opacity: 1,
        },
    },
};
