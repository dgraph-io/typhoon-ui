/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useTheme } from "hooks/useTheme";
import { stylegun } from "helpers/stylegun";
import { styles } from "./Navbar.styles";

import { Stack } from "components";
import { NavbarPropsType } from "./Navbar.types";

const Navbar = ({ children, styles: stylesProp = {} }: NavbarPropsType) => {
    const theme = useTheme();
    return (
        <Stack
            direction="horizontal"
            align="center"
            gap={2}
            fullWidth
            styles={stylegun({
                css: { ...styles.Navbar, ...stylesProp },
                theme,
                component: "Navbar",
            })}
        >
            {children}
        </Stack>
    );
};

export default Navbar;
