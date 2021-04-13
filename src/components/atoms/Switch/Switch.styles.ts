export const styles = {
    SwitchLabel: {
        position: "relative",
    },
    SwitchSlider: {
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        width: 8,
        height: 4,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "grey.border",
        borderRadius: "64px",
        "::before": {
            position: "absolute",
            size: 3,
            left: "4px",
            bottom: "4px",
            content: '""',
            backgroundColor: "white",
            borderRadius: "50%",
            transition: "0.2s",
        },
    },
    SwitchInput: {
        opacity: 0,
        width: 0,
        height: 0,
        display: "none",

        "&:checked + div > span": {
            backgroundColor: "pink",
        },

        "&:checked + div > span::before": {
            transform: "translateX({{space.4}})",
        },
    },
    SwitchOn: {
        marginTop: 1,
        marginLeft: "12px",
    },
    SwitchOff: { marginLeft: 4, marginTop: 1 },
    Disabled: {
        pointerEvents: "none",
        filter: "grayscale(1)",
        opacity: 0.4,
        position: "relative",
    },
};
