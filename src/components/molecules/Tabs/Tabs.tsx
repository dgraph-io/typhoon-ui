import React from "react";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { styles } from "./Tabs.styles";
import { TabsPropsType } from "./Tabs.types";

import { Button, Stack, Divider, Container } from "components";

const Tabs = ({
    selected,
    onSelect,
    children,
    showDivider = true,
    styles: stylesProp = {},
    tabWidth,
}: TabsPropsType) => {
    const theme = useTheme();

    const tabList = React.Children.toArray(children).map(
        (tab: any) => tab.props
    );

    const selectedTab: any = React.Children.toArray(children).filter(
        ({ props: tabProps }: any) => tabProps.id === selected
    )[0];

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
