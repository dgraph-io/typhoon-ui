import { monthLabels } from "components/molecules/DatePicker/constants";

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
    `${date.getHours()}:${date.getMinutes()}`;

export const getDaysDifference = (startDate: Date, endDate: Date) => {
    const time_difference = endDate.getTime() - startDate.getTime();
    return Math.trunc(time_difference / (1000 * 60 * 60 * 24));
};
