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
import { styles } from "./Tabs.styles";
import { TabsPropsType } from "./Tabs.types";

import { Button, Stack, Divider, Container, Text } from "components";

const Tabs = ({
    selected,
    onSelect,
    children,
    showDivider = true,
    styles: stylesProp = {},
    tabWidth,
    unselected = "Select a tab",
}: TabsPropsType) => {
    const theme = useTheme();

    const childrenList = React.Children.toArray(children);

    const tabList = childrenList.map((tab: any) => tab.props);

    const selectedTab: any = childrenList.find(
        ({ props: tabProps }: any) => tabProps.id === selected
    ) || <Text>{unselected}</Text>;

    const tabContent = React.cloneElement(selectedTab);

    return (
        <Stack direction="vertical" styles={stylesProp}>
            <Stack direction="horizontal" gap={0}>
                {tabList.map(({ label, id, onClick }, index) => {
                    const TabStyle = {
                        borderRadius: 0,
                        ...(index === 0 ? { paddingLeft: 0 } : {}),
                        ...(id === selected
                            ? {
                                  borderBottom:
                                      "{{lineThickness.1}} solid {{colors.pink}}",
                              }
                            : {
                                  borderBottom:
                                      "{{lineThickness.1}} solid transparent",
                              }),
                        width: tabWidth ? tabWidth : "inherit",
                    };
                    return (
                        <Button
                            key={id}
                            styles={TabStyle}
                            variant="whistle"
                            onClick={() => {
                                onClick && onClick();
                                onSelect(id);
                            }}
                        >
                            {label}
                        </Button>
                    );
                })}

                {showDivider && <Divider />}
            </Stack>
            <Container styles={stylegun({ css: styles.TabContainer, theme })}>
                {tabContent}
            </Container>
        </Stack>
    );
};

export default Tabs;
