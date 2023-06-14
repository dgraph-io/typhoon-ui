import { FormConfig, FormErrorType, FormConfigValueType, RuleType } from "./useForm.types";
export declare const convertToFormState: <T extends FormConfigValueType, K extends keyof T>(config: T, ignoreValidation?: boolean) => FormConfig<T>;
export declare const getErrors: (key: string, value: any, rules?: Array<RuleType>) => FormErrorType[];
export declare const getFormValues: <T extends FormConfigValueType>(values: Partial<{ [K in keyof T]: T[K]["default"]; }>, form: FormConfig<T>, config: T) => FormConfig<T>;
