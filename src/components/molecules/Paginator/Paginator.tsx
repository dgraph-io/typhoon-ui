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

import React from "react";
import { Button, Container, Select, Stack, Text } from "components";
import { styles } from "./Paginator.styles";
import { PaginatorPropsType } from "./Paginator.types";

export default ({
    total,
    offset,
    size,
    sizeRange,
    onChange,
}: PaginatorPropsType) => {
    return (
        <Stack direction="horizontal" gap={2} align="center">
            <Stack direction="horizontal" gap={1} align="center">
                <Text color="grey">Items per page</Text>
                <Select
                    buttonStyles={{ height: "fit-content" }}
                    selected={{
                        value: size,
                        id: String(size),
                        label: String(size),
                    }}
                    values={sizeRange.map(sizeValue => ({
                        value: sizeValue,
                        id: String(sizeValue),
                        label: String(sizeValue),
                    }))}
                    onSelect={({ value }: any) => {
                        onChange({
                            offset: offset,
                            size: value.value,
                        });
                    }}
                    styles={{ width: "65px" }}
                />
            </Stack>
            <Text color="grey" weight={500}>{`${offset + 1}-${
                offset + size > total ? total : offset + size
            } of ${total}`}</Text>
            <Stack direction="horizontal">
                <Button
                    onClick={() => onChange({ size, offset: offset - size })}
                    variant="ghost"
                    styles={styles.Button}
                    disabled={offset === 0}
                >
                    <Container styles={styles.Left} />
                </Button>
                <Button
                    onClick={() => onChange({ size, offset: offset + size })}
                    variant="ghost"
                    styles={styles.Button}
                    disabled={offset + size >= total}
                >
                    <Container styles={styles.Right} />
                </Button>
            </Stack>
        </Stack>
    );
};
