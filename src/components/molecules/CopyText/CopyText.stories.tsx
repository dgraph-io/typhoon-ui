import React from "react";
import { FocusVisibleManager } from "hooks/useFocusVisible";
import CopyText from "./CopyText";

export default {
    title: "Molecules/CopyText",
    component: CopyText,
};

export const CopyTextDefault = () => {
    return (
        <FocusVisibleManager>
            <CopyText text="Copy me" />
        </FocusVisibleManager>
    );
};
