import { StylesObject } from "../../../types";
export interface AvatarPropsType {
    src?: string;
    styles?: StylesObject;
    round?: boolean;
    bgColor?: string;
    color?: string;
    text?: string;
    variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}
