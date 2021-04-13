export const styles = {
    Button: {
        fontSize: "3",
        paddingX: 2,
        borderRadius: 2,
        outline: 0,
        height: 5,
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        minWidth: "fit-content",
        cursor: "pointer",
        fontWeight: 600,
        ":disabled": {
            opacity: 0.5,
            cursor: "default",
        },
        ":focus": {
            outline: 0,
        },
    },
    FocusedButton: {
        boxShadow: "{{focus.boxShadow}}",
    },
};
