/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface ContainerPropsType extends React.HTMLProps<HTMLDivElement> {
    styles?: StylesObject;
    fullWidth?: true | false;
    children?: React.ReactNode;
    onClick?: () => void;
}
