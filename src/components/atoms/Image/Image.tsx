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

import { styles } from "./Image.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { ImagePropsType } from "./Image.types";

const Image = ({
    fullWidth = true,
    alt,
    src,
    styles: stylesProp = {},
    ...props
}: ImagePropsType): JSX.Element => {
    const theme = useTheme();

    let width = fullWidth ? "100%" : "auto";

    return (
        <img
            alt={alt}
            src={src}
            css={stylegun({
                css: { ...styles.Image, width, ...stylesProp },
                theme,
                component: "Image",
            })}
            {...props}
        />
    );
};

export default Image;
