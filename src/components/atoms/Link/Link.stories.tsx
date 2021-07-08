import React from "react";
import Link from "./Link";
import { Stack, Text } from "components";


export default {
    title: "Atoms/Link",
    component: Link,
};

export const ExternalLink = () => (
    
        <Stack direction="horizontal" gap={4} inline align="flex-start">
            <Link href="https://dgraph.io" openInNewTab>
                <Text>Link with new tab</Text>
            </Link>
            <Link href="https://dgraph.io">
                <Text>Link</Text>
            </Link>
        </Stack>
    
);
