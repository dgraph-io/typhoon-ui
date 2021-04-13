export const styles = {
    Card: {
        paddingX: 3,
        paddingY: 3,
        borderRadius: 1,
        outline: 0,
        textAlign: "unset",
        border: "{{lineThickness.1}} solid {{colors.grey.border}}",
        ":focus": {
            outline: "none",
            border: 0,
        },
    },
    FocusedCard: {
        boxShadow: "{{focus.boxShadow}}",
    },
};
