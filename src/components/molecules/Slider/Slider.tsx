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
import { SliderProps } from "./Slider.types";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { styles } from "./Slider.styles";

import { Text, Stack } from "components";
import { useCallback } from "react";

const Slider = ({
    min,
    max,
    value,
    onChange,
    onMouseUp,
    styles: stylesProp = {},
    label,
    minLabel,
    maxLabel,
    step,
    disabled = false,
}: SliderProps) => {
    const theme = useTheme();
    const onChangeWithEventPersisted = useCallback(
        e => {
            e.persist();
            onChange(e);
        },
        [onChange]
    );
    return (
        <Stack direction="vertical" styles={stylesProp}>
            {label && <Text>{label}</Text>}
            <Stack gap={1} fullWidth={true} align="center">
                {minLabel && (
                    <Text variant={1} color="grey" weight={500}>
                        {minLabel}
                    </Text>
                )}
                <input
                    disabled={disabled}
                    type="range"
                    min={min}
                    max={max}
                    defaultValue={value}
                    onChange={onChangeWithEventPersisted}
                    onMouseUp={onMouseUp}
                    step={step}
                    css={stylegun({
                        css: {
                            ...styles.Slider,
                        },
                        theme,
                        component: "Slider",
                    })}
                ></input>

                {maxLabel && (
                    <Text variant={1} color="grey" weight={500}>
                        {maxLabel}
                    </Text>
                )}
            </Stack>
        </Stack>
    );
};

export default Slider;
