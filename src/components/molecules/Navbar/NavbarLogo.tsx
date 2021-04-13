/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "hooks/useTheme";
import { stylegun } from "helpers/stylegun";
import { styles } from "./Navbar.styles";
import { Link } from "components";
import { NavbarLogoPropsType } from "./Navbar.types";

const NavbarLogo = ({
    src,
    alt,
    styles: stylesProp = {},
    link = "/",
}: NavbarLogoPropsType) => {
    const theme = useTheme();
    return (
        <Link href={link}>
            <img
                src={src}
                alt={alt}
                css={stylegun({
                    css: { ...styles.NavbarLogo, ...stylesProp },
                    theme,
                    component: "NavbarLogo",
                })}
            />
        </Link>
    );
};

export default NavbarLogo;
