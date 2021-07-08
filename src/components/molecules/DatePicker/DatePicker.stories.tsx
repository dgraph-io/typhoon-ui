import { noop } from "helpers/utils";

import React from "react";
import DatePicker from "./DatePicker";

export default {
    title: "Molecules/DatePicker",
    component: DatePicker,
};

export const Default = () => (
    
        <DatePicker
            disableFutureDate={true}
            onChange={noop}
            onClose={noop}
            now={new Date(2020, 1, 1)}
        />
    
);

export const DatePickerWithTime = () => (
    
        <DatePicker
            disableFutureDate={true}
            onChange={noop}
            onClose={noop}
            now={new Date(2020, 1, 1)}
            showTime={true}
        />
    
);
