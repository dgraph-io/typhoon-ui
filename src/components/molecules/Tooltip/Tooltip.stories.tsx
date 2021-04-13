import React from "react";
import Tooltip from "./Tooltip";
import { Heading, Stack, Text } from "components";
export default {
    title: "Molecules/Tooltip",
    component: Tooltip,
};

export const DefaultTooltip = () => {
    return (
        <Tooltip
            position={"right"}
            content={() => (
                <Stack styles={{ width: "200px" }}>
                    <Text>Sampling Ratio</Text>
                    <Text>
                        Adjust the trace sampling rate for Dgraph queries with
                        the --trace option for Dgraph Alphas. By default,
                        --trace is set to 0.01 to trace 1% of queries.
                    </Text>
                </Stack>
            )}
        >
            <Heading>Hover over me to reveal</Heading>
        </Tooltip>
    );
};
