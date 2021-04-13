export declare const styles: {
    Box: {
        size: number;
        textAlign: string;
        padding: string;
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    DateInput: {
        fontSize: number;
        width: string;
        textAlign: string;
        padding: number;
    };
    ActionButton: {
        height: string;
    };
    Date: {
        position: string;
        borderRadius: number;
        background: string;
        color: string;
        padding: number;
        fontWeight: number;
        ":hover": {
            borderRadius: number;
            border: string;
        };
        ":disabled:hover": {
            border: string;
        };
    };
    SelectedDate: {
        borderRadius: number;
        background: string;
        color: string;
        border: string;
        ":hover": {
            borderRadius: number;
            border: string;
        };
        "::after": {
            borderColor: string;
            position: string;
            top: string;
            left: string;
            transform: string;
            color: string;
            content: string;
            size: number;
            borderBottom: string;
            fontWeight: number;
        };
    };
    OtherMonth: {
        color: string;
    };
    InBetweenDate: {
        "::before": {
            position: string;
            size: number;
            content: string;
            background: string;
        };
        "::after": {
            borderColor: string;
        };
        ":hover": {
            border: string;
        };
    };
    TrailingRight: {
        "::before": {
            borderRadius: number;
            borderRightRadius: number;
            position: string;
            size: number;
            content: string;
            background: string;
        };
    };
    TrailingLeft: {
        "::before": {
            borderRadius: number;
            borderLeftRadius: number;
            position: string;
            size: number;
            content: string;
            background: string;
        };
    };
    Today: {
        position: string;
        "::after": {
            position: string;
            top: string;
            left: string;
            transform: string;
            color: string;
            content: string;
            size: number;
            borderBottom: string;
            fontWeight: number;
        };
    };
};
