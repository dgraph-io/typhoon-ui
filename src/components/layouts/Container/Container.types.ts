export interface ContainerPropsType extends React.HTMLProps<HTMLDivElement> {
    styles?: Object;
    theme?: Object;
    fullWidth?: true | false;
    children?: React.ReactNode;
    onClick?: () => void;
}
