/** @jsx jsx */
import { jsx } from "@emotion/react";

import { styles } from "./Link.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { useFocusVisible } from "hooks/useFocusVisible";
import { LinkPropsType } from "./Link.types";

const ensureScheme = (value: any, defaultScheme = "https") => {
    if (!value || value.length === 0 || value[0] === "/") return value;

    if (value.indexOf("://") < 0) return `${defaultScheme}://${value}`;

    return value;
};

const Link = ({
    children,
    href,
    openInNewTab,
    onClick,
    download,
    target,
    rel = "",
    disabled,
    defaultScheme = "https",
    isContent = false,
    styles: stylesProp = {},
}: LinkPropsType): JSX.Element => {
    const finalHref = ensureScheme(href, defaultScheme);
    const theme = useTheme();
    const { focusVisible, ...handleFocus } = useFocusVisible();

    const linkProps = {
        href: finalHref,
        onClick,
        download,
        target,
        rel,
    };

    if (disabled) {
        delete linkProps.href;
    }

    if (openInNewTab) {
        linkProps.target = "_blank";
        linkProps.rel = "noreferrer noopener";
    }

    return (
        <a
            css={stylegun({
                css: {
                    ...styles.Link,
                    ...(focusVisible ? styles.focusStyles : {}),
                    ...(isContent ? { display: "contents" } : {}),
                    ...stylesProp,
                },
                theme,
                component: "Link",
            })}
            {...linkProps}
            {...handleFocus}
        >
            {children || finalHref}
        </a>
    );
};

export default Link;
