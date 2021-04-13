


/** @jsx jsx */
import { jsx } from "@emotion/core";
import { stylegun } from "helpers/stylegun";
import { styles } from "./Sidebar.styles";
import { useTheme } from "hooks/useTheme";

import Stack from "components/layouts/Stack/Stack";
import { SidebarPropsType } from "./Sidebar.types";

const Sidebar = ({
    width = "300px",
    children,
    styles: stylesProp = {},
}: SidebarPropsType) => {
    const theme = useTheme();
    return (
        <Stack
            direction="vertical"
            gap={3}
            css={stylegun({
                css: { width, ...styles.Sidebar, ...stylesProp },
                theme,
                component: "Sidebar",
            })}
        >
            {children}
        </Stack>
    );
};

export default Sidebar;
