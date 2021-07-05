import { maxWidth } from "components/mediaqueries";

export const styles = {
    JumpCardContainerStyles: {
        position: "relative",
        width: "calc(50% - {{space.1}})",
        height: "200px",
        marginBottom: 2,

        [maxWidth[2]]: {
            width: "calc(100% - {{space.1}})",
            marginLeft: "0 !important",
            marginBottom: 2,
        },
    },
    JumpCardStyles: {
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
    },

    JumpCardContentStyles: {
        width: "58%",
    },

    IconStyles: {
        marginTop: 4,
    },
};
