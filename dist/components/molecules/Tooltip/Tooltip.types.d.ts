import { ReactNode } from "react";
import { StylesObject } from "../../../types";
import { FloaterPosition } from "../Floater/Floater.types";
export declare type TooltipPropsType = {
    content: string | ReactNode;
    children: string | ReactNode;
    position?: FloaterPosition;
    styles?: StylesObject;
};
