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

import { useCallback, useEffect, useRef, useState } from "react";

export const useInfiniteScroll = ({
    onBottom,
    offsetY = 100,
}: {
    onBottom: () => Promise<any>;
    offsetY?: number;
}) => {
    const ref = useRef<any>();
    const [loading, setLoading] = useState(false);

    const handleScroll = useCallback(
        async (e: any) => {
            if (
                e.target.scrollHeight - e.target.scrollTop <=
                    e.target.clientHeight + offsetY &&
                !loading
            ) {
                setLoading(true);
                await onBottom();
                setLoading(false);
            }
        },
        [onBottom, loading, setLoading, offsetY]
    );
    useEffect(() => {
        let targetElement: any;
        if (ref && ref.current) {
            targetElement = ref.current;
            ref.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (targetElement) {
                targetElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [handleScroll, ref]);
    return ref;
};
