export interface ComponentStylesType {
    component: any;
    theme: any;
}
export interface VariantStylesType {
    variant: string | number;
    component: any;
    theme: any;
}
export interface StylegunType<T> {
    css?: Object;
    theme: T;
    component?: string;
    variant?: string | number;
}
