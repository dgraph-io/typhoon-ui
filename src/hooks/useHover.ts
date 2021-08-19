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

import { useRef, useState, useEffect, MutableRefObject } from "react";

export const useHover = () => {
    const [value, setValue] = useState(false);
    const ref: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            let timeout: any;
            const handleMouseOver = () => {
                clearTimeout(timeout);
                setValue(true);
                node.removeEventListener("mouseleave", handleMouseOut);
                node.addEventListener("mouseleave", handleMouseOut);
            };

            const handleMouseOut = () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    setValue(false);
                }, 1000);
            };

            node.addEventListener("mouseenter", handleMouseOver);
            return () => {
                clearTimeout(timeout);
                node.removeEventListener("mouseenter", handleMouseOver);
                node.removeEventListener("mouseleave", handleMouseOut);
            };
        }
    }, [ref]);

    return { ref, isHovered: value };
};
