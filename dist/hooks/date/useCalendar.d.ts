/// <reference types="react" />
export declare const useCalendar: (now?: Date) => {
    monthMap: string[];
    days: {
        date: number;
        day: number;
        monthDiff: number;
        timestamp: number;
        year: number;
        dayString: string;
    }[];
    selectedMonth: number;
    selectedYear: number;
    setSelectedMonth: import("react").Dispatch<import("react").SetStateAction<number>>;
    setSelectedYear: import("react").Dispatch<import("react").SetStateAction<number>>;
    onNextMonth: () => void;
    onPreviousMonth: () => void;
};
