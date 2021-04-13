export interface SidebarPropsType {
    width?: string;
    children: React.ReactNode;
    styles?: Object;
}

export interface SidebarGroupPropsType {
    title?: string;
    links: SidebarStackPropsType[];
    styles?: Object;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    pathname?: string;
}

export interface SidebarStackPropsType {
    url?: string;
    disabled?: boolean;
    NavLink?: any;
    NavIcon?: React.ReactType;
    styles?: Object;
    onClick?: () => void;
    href?: string;
    pathname?: string;
}
