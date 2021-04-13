import React from "react";
import SidebarGroup from "./SidebarGroup";
import Sidebar from "./Sidebar";
import { FocusVisibleManager } from "hooks/useFocusVisible";
import { Text } from "components";
import { styles } from "./Sidebar.styles";

export default {
    title: "Molecules/Sidebar",
    component: Sidebar,
};

export const SidebarStory = () => {
    const overviewItems = [
        {
            url: "/overview",
            NavLink: () => (
                <Text
                    styles={{
                        ...styles.Text,
                    }}
                    variant={2}
                    weight={500}
                >
                    Overview
                </Text>
            ),
        },
    ];
    const developItems = [
        {
            url: "/overview",
            NavLink: () => (
                <Text
                    styles={{
                        ...styles.Text,
                    }}
                    variant={2}
                    weight={500}
                >
                    Overview
                </Text>
            ),
        },
        {
            url: "/overview",
            NavLink: () => (
                <Text
                    styles={{
                        ...styles.Text,
                    }}
                    variant={2}
                    weight={500}
                >
                    Overview
                </Text>
            ),
        },
    ];

    const analyticsItems = [
        {
            url: "/overview",
            NavLink: () => (
                <Text
                    styles={{
                        ...styles.Text,
                    }}
                    variant={2}
                    weight={500}
                >
                    Overview
                </Text>
            ),
        },
    ];

    const resourcesItems = [
        {
            url: "/overview",
            NavLink: () => (
                <Text
                    styles={{
                        ...styles.Text,
                    }}
                    variant={2}
                    weight={500}
                >
                    Overview
                </Text>
            ),
        },
        {
            url: "/overview",
            NavLink: () => (
                <Text
                    styles={{
                        ...styles.Text,
                    }}
                    variant={2}
                    weight={500}
                >
                    Overview
                </Text>
            ),
        },
    ];
    return (
        <FocusVisibleManager>
            <Sidebar>
                <SidebarGroup links={overviewItems} />
                <SidebarGroup title="Develop" links={developItems} />
                <SidebarGroup title="Analytics" links={analyticsItems} />
                <SidebarGroup title="Resources" links={resourcesItems} />
            </Sidebar>
        </FocusVisibleManager>
    );
};
