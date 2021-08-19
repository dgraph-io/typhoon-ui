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

import { useForm } from "hooks/form/useForm";
import { TimePickerForm } from "./TimePicker.types";

export const useTimePicker = (now: Date) => {
    const getHours = now.getHours();
    const getMinutes = now.getMinutes();

    const { form: timeForm, setValue } = useForm<TimePickerForm>({
        startTimezone: {
            default: now.getHours() > 11 ? "PM" : "AM",
        },
        endTimezone: {
            default: now.getHours() > 11 ? "PM" : "AM",
        },
        startTimeHour: {
            default: getHours > 11 ? getHours - 12 : getHours,
        },
        startTimeMinute: {
            default: getMinutes,
        },
        endTimeHour: {
            default: getHours > 11 ? getHours - 12 : getHours,
        },
        endTimeMinute: {
            default: getMinutes,
        },
    });

    const { startTimeHour, endTimeHour } = timeForm || {};

    const dateConstructor = (date: number, hour: number, minutes: number) => {
        return new Date(
            new Date(date).getFullYear(),
            new Date(date).getMonth(),
            new Date(date).getDate(),
            hour,
            minutes
        );
    };

    const updateStartTimeHour = (hour: number) => {
        if (hour > 11) {
            setValue({
                startTimeHour: hour - 12,
            });
        } else if (hour < 0) {
            setValue({
                startTimeHour: 0,
            });
        } else {
            setValue({
                startTimeHour: hour,
            });
        }
    };

    const updateStartTimeMinute = (min: number) => {
        if (min > 59) {
            setValue({
                startTimeHour:
                    startTimeHour?.value + 1 > 11
                        ? 0
                        : startTimeHour?.value + 1,
                startTimeMinute: 0,
            });
        } else if (min < 0) {
            setValue({
                startTimeHour:
                    startTimeHour?.value < 1 ? 0 : startTimeHour?.value - 1,
                startTimeMinute: 30,
            });
        } else {
            setValue({
                startTimeMinute: min,
            });
        }
    };

    const updateEndTimeHour = (hour: number) => {
        if (hour > 11) {
            setValue({
                endTimeHour: hour - 12,
            });
        } else if (hour < 0) {
            setValue({
                endTimeHour: 0,
            });
        } else {
            setValue({
                endTimeHour: hour,
            });
        }
    };

    const updateEndTimeMinute = (min: number) => {
        if (min > 59) {
            setValue({
                endTimeHour:
                    endTimeHour?.value + 1 > 11 ? 0 : endTimeHour?.value + 1,
                endTimeMinute: 0,
            });
        } else if (min < 0) {
            setValue({
                endTimeHour:
                    endTimeHour?.value < 1 ? 0 : endTimeHour?.value - 1,
                endTimeMinute: 30,
            });
        } else {
            setValue({
                endTimeMinute: min,
            });
        }
    };
    return {
        timeForm,
        setValue,
        dateConstructor,
        updateStartTimeHour,
        updateStartTimeMinute,
        updateEndTimeHour,
        updateEndTimeMinute,
    };
};
