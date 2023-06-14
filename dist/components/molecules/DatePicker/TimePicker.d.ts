/// <reference types="react" />
import { FormConfig } from "hooks/form/useForm.types";
import { TimePickerForm } from "./TimePicker.types";
export declare const TimePicker: ({ setStartDate, setEndDate, startDate, endDate, form: timeForm, setValue, updateStartTimeHour, updateStartTimeMinute, updateEndTimeHour, updateEndTimeMinute, now, }: {
    now?: Date | undefined;
    setStartDate: (date: any) => void;
    setEndDate: (date: any) => void;
    startDate: null | number;
    endDate: null | number;
    form: FormConfig<TimePickerForm>;
    setValue: any;
    updateStartTimeHour: (hour: number) => void;
    updateStartTimeMinute: (minute: number) => void;
    updateEndTimeHour: (hour: number) => void;
    updateEndTimeMinute: (minute: number) => void;
}) => JSX.Element;
