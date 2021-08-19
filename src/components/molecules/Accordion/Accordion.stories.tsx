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

import React, { useState } from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import { Text } from "components";


export default {
    title: "Molecules/Accordion",
    component: Accordion,
};

export const AccordionDefault = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    return (
        
            <Accordion
                selected={activeId}
                onSelect={id => {
                    setActiveId(id);
                }}
            >
                <AccordionItem label="Home" id="item1">
                    <Text>This is Home Section</Text>
                </AccordionItem>

                <AccordionItem label="About" id="item2">
                    <Text>This is About Section</Text>
                </AccordionItem>

                <AccordionItem label="Contact" id="item3">
                    <Text>This is Contact Section</Text>
                </AccordionItem>
            </Accordion>
        
    );
};
