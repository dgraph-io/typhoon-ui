


/** @jsx jsx */
import { jsx } from "@emotion/core";
import { stylegun } from "helpers/stylegun";

import React from "react";
import { useTheme } from "hooks/useTheme";
import { styles } from "./Sidebar.styles";

import { Heading, Stack, Link } from "components";
// import history from "libs/browserHistory";
import { SidebarGroupPropsType, SidebarStackPropsType } from "./Sidebar.types";

const SidebarStack = ({
    url,
    disabled,
    NavLink,
    NavIcon,
    onClick,
    pathname,
    styles: stylesProp = {},
}: SidebarStackPropsType) => {
    const active = pathname === url;
    const theme = useTheme();
    return (
        <Stack
            onClick={onClick}
            direction="horizontal"
            align="center"
            css={stylegun({
                css: {
                    ...styles.SidebarGroup,
                    ...(disabled ? styles.Disabled : {}),
                    ...(active ? styles.Active : {}),
                    ...stylesProp,
                },
                theme,
                component: "SidebarGroup",
            })}
        >
            {NavIcon && <NavIcon height="24px" width="24px" />}
            <NavLink />
        </Stack>
    );
};

const SidebarGroup = ({
    title,
    links,
    onClick,
    pathname,
    styles: stylesProp,
}: SidebarGroupPropsType) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick(e);
        }
    };

    const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // history.push({
        //     pathname: e.currentTarget.pathname,
        // });
    };

    return (
        <Stack direction="vertical">
            {title && (
                <Heading
                    color="pink"
                    variant={4}
                    styles={{ paddingX: 3, paddingY: "1" }}
                >
                    {title}
                </Heading>
            )}

            {links.map((link: SidebarStackPropsType, index: number) => {
                const { disabled } = link;
                return (
                    <React.Fragment key={index}>
                        {link.url ? (
                            <Link
                                href={link.url}
                                disabled={link.disabled}
                                onClick={handleTransition}
                                styles={{
                                    ...(disabled ? styles.Disabled : {}),
                                }}
                            >
                                <SidebarStack
                                    {...link}
                                    {...stylesProp}
                                    pathname={pathname}
                                />
                            </Link>
                        ) : (
                            <Link
                                href={link.href}
                                onClick={handleClick}
                                openInNewTab
                                styles={{
                                    ...(disabled ? styles.Disabled : {}),
                                }}
                            >
                                <SidebarStack {...link} {...stylesProp} />
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </Stack>
    );
};

export default SidebarGroup;
