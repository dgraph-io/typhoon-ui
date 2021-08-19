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

import { monthLabels } from "./constants";

export const getNow = () => {
    return new Date();
};

export const getDayBefore = (days: number, referenceDay = new Date()) => {
    const newDate = new Date(referenceDay);
    newDate.setDate(referenceDay.getDate() - days);
    return newDate;
};

export const getDateFromEpoch = (epoch: number) => new Date(epoch * 1000);

export const getEpochFromDate = (date: Date) =>
    Math.floor(date.getTime() / 1000);

export const getShortFullDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const getShortDate = (date: Date) => {
    return `${monthLabels[date.getMonth()]} ${date.getDate()}`;
};

export const getShortTime = (date: Date) =>
    `${getZeroPaddedTime(date.getHours())}:${getZeroPaddedTime(
        date.getMinutes()
    )}`;

export const getDaysDifference = (startDate: Date, endDate: Date) => {
    const time_difference = endDate.getTime() - startDate.getTime();
    return Math.trunc(time_difference / (1000 * 60 * 60 * 24));
};

export const getHoursDifference = (startDate: Date, endDate: Date) => {
    const time_difference = endDate.getTime() - startDate.getTime();
    return Math.trunc(time_difference / (1000 * 60 * 60));
};

export const getZeroPaddedTime = (time: number) => {
    if (time < 10) {
        return `0${time}`;
    } else {
        return `${time}`;
    }
};

export const getFormattedDateString = (date: Date) =>
    new Date(date).toDateString().slice(4);
