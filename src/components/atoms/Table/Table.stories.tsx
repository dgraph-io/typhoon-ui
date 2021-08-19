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

import Table from "./Table";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableHeading from "./TableHeading";
import TableDescription from "./TableDescription";
import { Button } from "components";

export default {
    title: "Atoms/Table",
    component: Table,
};

export const Default = () => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeading>Name</TableHeading>
                    <TableHeading>Email</TableHeading>
                    <TableHeading>Contact</TableHeading>
                </TableRow>
            </TableHead>

            <TableBody>
                <TableRow>
                    <TableDescription>Tejas</TableDescription>
                    <TableDescription>tejas@dgraph.io</TableDescription>
                    <TableDescription>XXXXXX</TableDescription>
                </TableRow>

                <TableRow>
                    <TableDescription>Hey</TableDescription>
                    <TableDescription>thiyaga@dgraph.io</TableDescription>
                    <TableDescription>XXXXXX</TableDescription>
                </TableRow>

                <TableRow>
                    <TableDescription>Mohit</TableDescription>
                    <TableDescription>mohit@dgraph.io</TableDescription>
                    <TableDescription>XXXXXX</TableDescription>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export const TableWithButton = () => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeading>Name</TableHeading>
                    <TableHeading>Email</TableHeading>
                    <TableHeading>Contact</TableHeading>
                </TableRow>
            </TableHead>

            <TableBody>
                <TableRow>
                    <TableDescription>Tejas</TableDescription>
                    <TableDescription>tejas@dgraph.io</TableDescription>
                    <TableDescription>
                        <Button variant="whistle">Delete</Button>
                    </TableDescription>
                </TableRow>

                <TableRow>
                    <TableDescription>Hey</TableDescription>
                    <TableDescription>thiyaga@dgraph.io</TableDescription>
                    <TableDescription>
                        <Button variant="whistle">Delete</Button>
                    </TableDescription>
                </TableRow>

                <TableRow>
                    <TableDescription>Mohit</TableDescription>
                    <TableDescription>mohit@dgraph.io</TableDescription>
                    <TableDescription>
                        <Button variant="whistle">Delete</Button>
                    </TableDescription>
                </TableRow>
            </TableBody>
        </Table>
    );
};
