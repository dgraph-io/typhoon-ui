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
