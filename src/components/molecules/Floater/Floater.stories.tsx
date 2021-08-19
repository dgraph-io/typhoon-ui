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

import React from "react";
import Floater from "./Floater";
import { Button } from "components";
export default {
    title: "Molecules/Floater",
    component: Floater,
};

export const FloaterRight = () => {
    return (
        <>
            <Floater content={"Click here"} position={"right"}>
                <Button variant="yell">Subject</Button>
            </Floater>
        </>
    );
};

export const FloaterLeft = () => {
    return (
        <>
            <Floater content={"Click here"} position={"left"}>
                <Button variant="yell">Subject</Button>
            </Floater>
        </>
    );
};

export const FloaterTop = () => {
    return (
        <>
            <Floater content={"Click here"} position={"top"}>
                <Button variant="yell">Subject</Button>
            </Floater>
        </>
    );
};

export const FloaterBottom = () => {
    return (
        <>
            <Floater content={"Click here"} position={"bottom"}>
                <Button variant="yell">Subject</Button>
            </Floater>
        </>
    );
};
