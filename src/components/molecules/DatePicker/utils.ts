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

import { monthLabels } from "helpers";
import { styles } from "./DatePicker.styles";

export const getDateString = (timeStamp: number) => {
    const date = new Date(timeStamp);
    return `${
        monthLabels[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
};

export const mapToSubArrays = <T extends unknown>(
    array: Array<T>,
    size: number
): Array<Array<T>> => {
    return array.reduce((agg, current, index) => {
        agg[Math.floor(index / size)] = [
            ...agg[Math.floor(index / size)],
            current,
        ];
        return agg;
    }, new Array(size).fill([]));
};

export const isDateInBetween = (
    date: number,
    startDate: number | null,
    endDate: number | null
) => {
    if (startDate === null || endDate === null) {
        return false;
    } else if (
        new Date(date).getTime() > new Date(startDate).getTime() &&
        new Date(date).getTime() < new Date(endDate).getTime()
    ) {
        return true;
    } else {
        return false;
    }
};

export const getDatePickerStyles = (
    now: Date,
    dayObject: Date,
    day: {
        date: number;
        monthDiff: number;
        timestamp: number;
        day: number;
        year: number;
        dayString: string;
    },
    isSelected: boolean,
    startDate: null | number,
    endDate: null | number
) => {
    return {
        ...styles.Box,
        ...styles.Date,
        ...(now.toDateString() === dayObject.toDateString()
            ? styles.Today
            : {}),
        ...(day.monthDiff !== 0 ? styles.OtherMonth : {}),
        ...(isSelected ? styles.SelectedDate : {}),
        ...(isDateInBetween(day.timestamp, startDate, endDate)
            ? styles.InBetweenDate
            : {}),
        ...(day.timestamp === startDate && endDate !== null
            ? styles.TrailingRight
            : {}),
        ...(day.timestamp === endDate && startDate !== null
            ? styles.TrailingLeft
            : {}),
    };
};
