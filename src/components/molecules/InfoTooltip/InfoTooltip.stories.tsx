import React from "react";
import { Stack, Text } from "components";
import InfoTooltip from "./InfoTooltip";
export default {
    title: "Molecules/InfoTooltip",
    component: InfoTooltip,
};

export const DefaultInfoTooltip = () => {
    return (
        <InfoTooltip
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
        />
    );
};
