import React from "react";
import Divider from "./Divider";

export default {
    title: "Atoms/Divider",
    component: Divider,
};

export const DividerLine = () => <Divider variant="solid" />;

export const DashedLine = () => <Divider variant="dashed" />;

export const LineWithWidth = () => <Divider width="50%" />;
