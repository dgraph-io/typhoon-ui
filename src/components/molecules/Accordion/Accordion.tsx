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
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { Stack, Button, Container } from "components";
import {
    AccordionPropsType,
    ChevronContainerPropsType,
} from "./Accordion.types";
import { styles } from "./Accordion.styles";

const ChevronContainer = ({ isOpen }: ChevronContainerPropsType) => (
    <Container
        styles={{
            ...styles.ChevronStyles,
            transform: isOpen
                ? "rotate(-135deg) translateX(-3px)"
                : "rotate(45deg) translateY(-3px)",
        }}
    />
);

function Accordion({
    selected,
    children,
    onSelect,
    styles: stylesProp = {},
}: AccordionPropsType) {
    const theme = useTheme();

    const accordionItems = React.Children.toArray(children).map(
        (item: any) => item.props
    );

    return (
        <Stack direction="vertical" styles={stylesProp}>
            {accordionItems.map(({ label, id, children }) => {
                const isOpen = selected === id;
                return (
                    <React.Fragment key={id}>
                        <Button
                            variant="whistle"
                            styles={{ paddingX: 0 }}
                            onClick={() => {
                                onSelect(isOpen ? null : id);
                            }}
                        >
                            <Stack align="center" gap={2}>
                                {label}
                                <ChevronContainer isOpen={isOpen} />
                            </Stack>
                        </Button>
                        {isOpen && (
                            <Container
                                styles={stylegun({
                                    css: styles.AccordionItemContent,
                                    theme,
                                })}
                            >
                                {children}
                            </Container>
                        )}
                    </React.Fragment>
                );
            })}
        </Stack>
    );
}

export default Accordion;
