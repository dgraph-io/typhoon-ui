/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ disableFutureDate, showSelection, onChange, onClose, now, showTime, }: {
        onChange: ({ start, end, step, }: {
            start: Date;
            end: Date;
            step: string;
        }) => void;
        onClose: () => void;
        disableFutureDate?: boolean | undefined;
        showSelection?: boolean | undefined;
        now?: Date | undefined;
        showTime?: boolean | undefined;
    }) => JSX.Element;
};
export default _default;
export declare const Default: () => JSX.Element;
export declare const DatePickerWithTime: () => JSX.Element;
