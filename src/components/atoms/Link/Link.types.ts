export interface LinkPropsType {
    styles?: Object;
    theme?: Object;
    children?: React.ReactNode;
    openInNewTab?: boolean;
    download?: boolean;
    rel?: string;
    target?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    defaultScheme?: string;
    href?: string;
    disabled?: boolean;
    isContent?: boolean;
}
