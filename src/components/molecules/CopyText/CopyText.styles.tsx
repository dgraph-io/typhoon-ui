export const styles = {
    CopyTextContainer: {
        position: "relative",
    },
    Input: {
        borderRadius: "100px 0 0 100px",
        borderRight: 0,
        ":disabled": {
            opacity: 1,
        },
        flexGrow: 1,
        color: "pink",
        border: 0,
        background: "pink.translucent",
        fontWeight: 500,
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingRight: 0,
    },
    Button: {
        display: "flex",
        borderRadius: "0 100px 100px 0",
        background: "pink.translucent",
        ":hover": {
            background: "pink.light",
        },
    },
    CopiedToast: {
        zIndex: "tooltip",
        top: "50%",
        transform: "translateY(-50%)",
        position: "absolute",
        left: "calc(100% + {{space.1}})",
        paddingX: 1,
        paddingY: "2px",
        background: "grey.default",
        borderRadius: 1,
        color: "white",
        transition: "opacity 250ms ease-out",
    },
};
