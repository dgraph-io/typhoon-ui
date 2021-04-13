import theme from "theme";
import { merge } from "helpers/utils";

export const tourTheme = merge(theme, {
    components: {
        Button: {
            variants: {
                cheer: {
                    color: "white",
                    background: "blue.dark",
                },
                ghost: {
                    color: "white",
                    background: "transparent",
                    ":hover": {
                        background: "transparent",
                    },
                },
            },
        },
        Card: {
            ...theme.components.Card,
            background: "blue",
        },
        Text: {
            color: "white",
        },
        Heading: {
            color: "white",
        },
        Floater: {
            background: "blue",
            color: "white",
        },
    },
});

export const tourFloaterTheme = merge(theme, {
    components: {
        Floater: {
            background: "blue",
            color: "white",
        },
    },
});
