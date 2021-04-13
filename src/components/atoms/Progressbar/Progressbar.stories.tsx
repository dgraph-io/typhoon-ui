import React from "react";
import Progressbar from "./Progressbar";

export default {
    title: "Atoms/Progressbar",
    component: Progressbar,
};

export const ProgressbarDefault = () => (
    <Progressbar width="50%" progress={70} />
);

export const ProgressBarWithBackgroundAndHeight = () => {
    return <Progressbar height={4} bgcolor="pink" progress={40} />;
};
