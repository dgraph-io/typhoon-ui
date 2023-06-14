/// <reference types="react" />
import { StylesObject } from "../../../types";
declare type LabelType = string | number;
export interface SliderProps extends React.HTMLProps<HTMLInputElement> {
    value: number;
    onChange: (value: any) => void;
    styles?: StylesObject;
    label?: string;
    minLabel?: LabelType;
    maxLabel?: LabelType;
}
export {};
