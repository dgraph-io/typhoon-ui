import { ChangeEventHandler } from "react";
export declare type FormConfigValueType = {
    [key: string]: FormElementType;
};
export declare type FormValuesType<T extends FormConfigValueType, K extends keyof T> = {
    [key: string]: FormValueType<T, K>;
};
export declare type FormConfig<T extends FormConfigValueType> = {
    [Key in keyof T]: FormValueType<T, Key>;
};
export declare type SetValueFn<T> = <K extends keyof T>(key: K, value: T[K]) => void;
export declare type RuleNameType = "required" | "email" | "nonEmptyString" | "passwordLength";
export interface RuleType {
    message: string;
    checkIsValid: Function;
    type: RuleNameType;
}
export interface FormElementType {
    default: any;
    rules?: Array<RuleType>;
}
export interface FormErrorType {
    message: string;
    for: string;
    type: RuleNameType;
}
export interface FormValueType<T extends FormConfigValueType, K extends keyof T> {
    value: T[K]["default"];
    errors: Array<FormErrorType>;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
