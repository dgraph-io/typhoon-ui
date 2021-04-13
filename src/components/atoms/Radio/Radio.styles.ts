export const styles: any = {
    Radio: {
        cursor: "pointer",
    },
    RadioInput: {
        position: "absolute",
        size: 0,
        clip: "rect(0,0,0,0)",
        margin: 0,
        border: 0,
        opacity: 0,
        pointerEvents: "none",
    },

    FocusedRadio: {
        boxShadow: "{{focus.boxShadow}}",
    },

    RadioUnchecked: {
        boxSizing: "content-box",
        cursor: "pointer",
        size: 2,
        border: "{{lineThickness.1}} solid {{colors.pink}}",
        borderRadius: 3,
    },

    RadioChecked: {
        boxSizing: "content-box",
        cursor: "pointer",
        size: 2,
        border: "{{lineThickness.1}} solid {{colors.pink}}",
        borderRadius: 3,
        position: "relative",
        ":after": {
            boxSizing: "content-box",
            content: '""',
            position: "absolute",
            size: 3,
            transform: "translate(-50%, -50%) scale(0.5)",
            top: "50%",
            left: "50%",
            borderRadius: 3,
            background: "pink",
        },
    },
};
