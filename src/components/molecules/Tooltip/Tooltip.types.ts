import { ReactNode } from "react";
import { FloaterPosition } from "../Floater/Floater.types";

export type TooltipPropsType = {
    content: string | ReactNode;
    children: string | ReactNode;
    position?: FloaterPosition;
    styles?: Object;
};
