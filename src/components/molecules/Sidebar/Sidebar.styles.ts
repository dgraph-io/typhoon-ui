export const styles = {
    SidebarGroup: {
        textDecoration: "none",
        display: "flex",
        paddingX: 3,
        paddingY: 1,
        cursor: "pointer",

        ":hover": {
            textDecoration: "none",
            transition: "200ms background ease-out",
            background: "grey.selected",
        },
    },
    Sidebar: {
        paddingY: 3,
        background: "grey.surface",
    },
    Icon: {
        marginTop: "4px",
    },
    Text: {
        paddingX: 3,
        color: "grey.default",
    },
    Disabled: {
        pointerEvents: "none",
        opacity: 0.5,
    },
    Active: {
        transition: "200ms background ease-out",
        background: "grey.selected",
    },
};
