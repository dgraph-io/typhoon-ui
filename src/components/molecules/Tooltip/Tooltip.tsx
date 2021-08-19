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

/** @jsx jsx */
import { jsx } from "@emotion/react";
import Container from "components/layouts/Container/Container";
import { useHover } from "hooks/useHover";
import Floater from "../Floater/Floater";
import { TooltipPropsType } from "./Tooltip.types";

export const Tooltip = ({
    content,
    position = "right",
    children,
    styles = {},
}: TooltipPropsType) => {
    const { ref, isHovered } = useHover();
    return (
        <Container ref={ref} styles={{ cursor: "pointer" }}>
            <Floater
                show={isHovered}
                content={content}
                position={position}
                styles={styles}
            >
                {children}
            </Floater>
        </Container>
    );
};

export default Tooltip;
