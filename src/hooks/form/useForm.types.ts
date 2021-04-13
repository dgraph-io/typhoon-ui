import { ChangeEventHandler } from "react";

export type FormConfigValueType = { [key: string]: FormElementType };

export type FormValuesType<T extends FormConfigValueType, K extends keyof T> = {
    [key: string]: FormValueType<T, K>;
};

export type FormConfig<T extends FormConfigValueType> = {
    [Key in keyof T]: FormValueType<T, Key>;
};

export type SetValueFn<T> = <K extends keyof T>(key: K, value: T[K]) => void;

export type RuleNameType = "required" | "email" | "nonEmptyString";
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

export interface FormValueType<
    T extends FormConfigValueType,
    K extends keyof T
> {
    value: T[K]["default"];
    errors: Array<FormErrorType>;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
