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
