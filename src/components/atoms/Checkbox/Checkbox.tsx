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
import { styles } from "./Checkbox.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { ReactComponent as Checked } from "./svgs/checked.svg";
import { ReactComponent as Unchecked } from "./svgs/unchecked.svg";

import { Stack, Text } from "components";
import { CheckboxPropsType } from "./Checkbox.types";

const Checkbox = ({
    checked,
    label,
    disabled = false,
    styles: stylesProp = {},
    ...props
}: CheckboxPropsType): JSX.Element => {
    const theme = useTheme();
    const CheckboxSvgStyles = stylegun({
        css: styles.CheckboxSvg,
        theme,
    });

    const CheckboxLabelStyles = stylegun({
        css: {
            ...styles.CheckboxLabelContainer,
            ...(disabled ? styles.Disabled : {}),
            ...stylesProp,
            ":focus-visible": {
                cursor: "pointer",
                ":focus-within svg": {
                    borderRadius: 1,
                    boxShadow: "{{focus.boxShadow}}",
                },
            },
        },
        theme,
        component: "Checkbox",
    });

    return (
        <label css={CheckboxLabelStyles}>
            <input
                type="checkbox"
                css={stylegun({ css: styles.CheckboxInput, theme })}
                {...props}
            />
            <Stack gap={1} align="center" wrap="nowrap">
                {checked ? (
                    <Checked css={CheckboxSvgStyles} />
                ) : (
                    <Unchecked css={CheckboxSvgStyles} />
                )}
                {label && <Text>{label}</Text>}
            </Stack>
        </label>
    );
};

export default Checkbox;
