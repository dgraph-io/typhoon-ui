interface CardType {
    description?: string;
    heading?: string;
    Icon?: React.FunctionComponent<any>;
    type?: string;
    Illustration?: React.FunctionComponent<any>;
    ActionElement?: React.ElementType;
    onClick?: () => void;
    Container?: React.ReactType;
    href?: string;
}

export interface JumpCardPropsType {
    card: CardType;
    styles?: Object;
}
