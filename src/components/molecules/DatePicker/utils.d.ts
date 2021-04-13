export declare const getDateString: {
    (timeStamp: number): string;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            toString: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            toFixed: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            toExponential: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            toPrecision: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            valueOf: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            toLocaleString: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const mapToSubArrays: <T extends unknown>(array: T[], size: number) => T[][];
export declare const isDateInBetween: (date: number, startDate: number | null, endDate: number | null) => boolean;
