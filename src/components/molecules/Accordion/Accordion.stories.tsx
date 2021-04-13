import React, { useState } from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import { Text } from "components";
import { FocusVisibleManager } from "hooks/useFocusVisible";

export default {
    title: "Molecules/Accordion",
    component: Accordion,
};

export const AccordionDefault = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    return (
        <FocusVisibleManager>
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
        </FocusVisibleManager>
    );
};
