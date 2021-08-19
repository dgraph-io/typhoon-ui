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

import { useCallback, useEffect, useState } from "react";
const daysMap = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const monthMap = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const getDayDetails = (args: {
    index: number;
    firstDay: number;
    month: number;
    year: number;
    numberOfDays: number;
}) => {
    const date = args.index - args.firstDay;
    const day = args.index % 7;
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    const prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    const _date =
        (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) +
        1;
    const monthDiff = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(
        args.year,
        args.month + monthDiff,
        _date
    ).getTime();
    return {
        date: _date,
        day,
        monthDiff,
        timestamp,
        year: args.year,
        dayString: daysMap[day],
    };
};

const getNumberOfDays = (year: number, month: number) => {
    return 40 - new Date(year, month, 40).getDate();
};

const getMonthDetails = (year: number, month: number) => {
    const firstDay = new Date(year, month).getDay();
    const numberOfDays = getNumberOfDays(year, month);
    const monthArray = [];
    let rows = 6;
    let currentDay = null;
    let index = 0;
    let cols = 7;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month,
            });
            monthArray.push(currentDay);
            index++;
        }
    }
    return monthArray;
};

export const useCalendar = (now:Date = new Date()) => {
    const [selectedMonth, setSelectedMonth] = useState(now.getMonth());
    const [selectedYear, setSelectedYear] = useState(now.getFullYear());

    const [days, setDays] = useState(
        getMonthDetails(selectedYear, selectedMonth)
    );

    const onPreviousMonth = useCallback(() => {
        if (selectedMonth === 0) {
            setSelectedMonth(11);
            setSelectedYear(selectedYear - 1);
        } else {
            setSelectedMonth(selectedMonth - 1);
        }
    }, [selectedYear, selectedMonth]);

    const onNextMonth = useCallback(() => {
        if (selectedMonth === 11) {
            setSelectedMonth(0);
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }
    }, [selectedYear, selectedMonth]);

    useEffect(() => {
        setDays(getMonthDetails(selectedYear, selectedMonth));
    }, [selectedMonth, selectedYear]);

    return {
        monthMap,
        days,
        selectedMonth,
        selectedYear,
        setSelectedMonth,
        setSelectedYear,
        onNextMonth,
        onPreviousMonth,
    };
};
