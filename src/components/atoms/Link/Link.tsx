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

/** @jsx jsx */
import { jsx } from "@emotion/react";

import { styles } from "./Link.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
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
                    ...(isContent ? { display: "contents" } : {}),
                    ...stylesProp,
                    ":focus-visible": styles.focusStyles,
                },
                theme,
                component: "Link",
            })}
            {...linkProps}
        >
            {children || finalHref}
        </a>
    );
};

export default Link;
