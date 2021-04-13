/// <reference types="react" />
declare const _default: ({ disableFutureDate, showSelection, onChange, onClose, now, }: {
    onChange: ({ start, end, step, }: {
        start: Date;
        end: Date;
        step: string;
    }) => void;
    onClose: () => void;
    disableFutureDate?: boolean | undefined;
    showSelection?: boolean | undefined;
    now?: Date | undefined;
}) => JSX.Element;
export default _default;
