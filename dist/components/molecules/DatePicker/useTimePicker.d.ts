import { TimePickerForm } from "./TimePicker.types";
export declare const useTimePicker: (now: Date) => {
    timeForm: import("../../../hooks/form/useForm.types").FormConfig<TimePickerForm>;
    setValue: (values: Partial<{
        startTimezone: string;
        endTimezone: string;
        startTimeHour: number;
        startTimeMinute: number;
        endTimeHour: number;
        endTimeMinute: number;
    }>) => void;
    dateConstructor: (date: number, hour: number, minutes: number) => Date;
    updateStartTimeHour: (hour: number) => void;
    updateStartTimeMinute: (min: number) => void;
    updateEndTimeHour: (hour: number) => void;
    updateEndTimeMinute: (min: number) => void;
};
