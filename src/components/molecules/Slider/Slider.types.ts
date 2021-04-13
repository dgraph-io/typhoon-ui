type LabelType = string | number;

export interface SliderProps extends React.HTMLProps<HTMLInputElement> {
    value: number;
    onChange: (value: any) => void;
    styles?: Object;
    label?: string;
    minLabel?: LabelType;
    maxLabel?: LabelType;
}
