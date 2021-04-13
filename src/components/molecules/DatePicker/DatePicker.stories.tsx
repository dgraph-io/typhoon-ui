import { noop } from "helpers/utils";
import { FocusVisibleManager } from "hooks/useFocusVisible";
import React from "react";
import DatePicker from "./DatePicker";

export default {
    title: "Molecules/DatePicker",
    component: DatePicker,
};

export const Default = () => (
    <FocusVisibleManager>
        <DatePicker
            disableFutureDate={true}
            onChange={noop}
            onClose={noop}
            now={new Date(2020, 1, 1)}
        />
    </FocusVisibleManager>
);
