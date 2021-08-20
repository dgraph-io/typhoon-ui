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

import { StylesObject } from "types";

export const styles: Record<string, StylesObject> = {
    Overlay: {
        background: "grey.dark",
        position: "fixed",
        zIndex: "overlay",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: "200ms opacity ease-out",
        willChange: "opacity",
    },
    ShowOverlay: {
        opacity: 0.3,
        pointerEvents: "unset",
    },
    HideOverlay: {
        opacity: 0,
        pointerEvents: "none",
    },
    ModalContainer: {
        minWidth: "450px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "modal",
        transition: "200ms opacity  ease-out, 200ms transform  ease-out",
        willChange: "opacity, transform",
    },
    ShowModal: {
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 1,
    },
    HideModal: {
        opacity: 0,
        transition: "none",
        transform: "translate(-50%, -50%) scale(1.05)",
        pointerEvents: "none",
        visibility: "hidden",
    },
};
