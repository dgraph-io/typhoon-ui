const UnderLinePseudoElement = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "pink",
    content: `""`,
    size: 3,
    borderBottom: "2px solid {{colors.grey.light}}",
    fontWeight: 600,
};
export const styles = {
    Box: {
        size: 5,
        textAlign: "center",
        padding: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    DateInput: {
        fontSize: 2,
        width: "100px",
        textAlign: "center",
        padding: 1,
    },
    ActionButton: {
        height: "fit-content",
    },
    Date: {
        position: "relative",
        borderRadius: 3,
        background: "transparent",
        color: "black",
        padding: 0,
        fontWeight: 500,
        ":hover": {
            borderRadius: 3,
            border: "{{lineThickness.2}} solid {{colors.pink.light}}",
        },
        ":disabled:hover": {
            border: "none",
        },
    },
    SelectedDate: {
        borderRadius: 3,
        background: "pink",
        color: "white",
        border: "{{lineThickness.2}} solid {{colors.pink}}",
        ":hover": {
            borderRadius: 3,
            border: "{{lineThickness.2}} solid {{colors.pink}}",
        },
        "::after": {
            ...UnderLinePseudoElement,
            borderColor: "transparent",
        },
    },
    OtherMonth: {
        color: "grey.light",
    },
    InBetweenDate: {
        "::before": {
            position: "absolute",
            size: 5,
            content: `""`,
            background: "pink.translucent",
        },
        "::after": {
            borderColor: "transparent",
        },
        ":hover": {
            border: "{{lineThickness.2}} solid {{colors.pink}}",
        },
    },
    TrailingRight: {
        "::before": {
            borderRadius: 3,
            borderRightRadius: 0,
            position: "absolute",
            size: 5,
            content: `""`,
            background: "pink.translucent",
        },
    },
    TrailingLeft: {
        "::before": {
            borderRadius: 3,
            borderLeftRadius: 0,
            position: "absolute",
            size: 5,
            content: `""`,
            background: "pink.translucent",
        },
    },

    Today: {
        position: "relative",
        "::after": UnderLinePseudoElement,
    },
};
