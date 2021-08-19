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

import { MutableRefObject, useEffect } from "react";

export const useOnClickOutside = (
    ref: MutableRefObject<any>,
    handler: (event: MouseEvent) => void,
    containerId: string = ""
) => {
    const containerElement = document.getElementById(containerId) || document;
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };

        containerElement.addEventListener("mousedown", listener);

        return () => {
            containerElement.removeEventListener("mousedown", listener);
        };
    }, [ref, handler, containerElement]);
};
