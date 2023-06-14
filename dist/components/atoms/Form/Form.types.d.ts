/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface FormPropsType extends React.HTMLProps<HTMLFormElement> {
    fullWidth?: boolean;
    styles?: StylesObject;
}
