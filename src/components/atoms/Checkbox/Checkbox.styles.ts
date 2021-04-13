export const styles = {
    CheckboxLabelContainer: {
        cursor: "pointer",
    },
    CheckboxInput: {
        position: "absolute",
        size: 0,
        clip: "rect(0,0,0,0)",
        margin: 0,
        borderRadius: 2,
        border: 0,
        opacity: 0,
        pointerEvents: "none",
    },

    CheckboxSvg: {
        cursor: "pointer",
        size: 3,
    },

    FocusedCheckbox: {
        cursor: "pointer",
        ":focus-within svg": {
            borderRadius: 1,
            boxShadow: "{{focus.boxShadow}}",
        },
    },
};
