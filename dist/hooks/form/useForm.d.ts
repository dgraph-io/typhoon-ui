import { FormConfigValueType, FormConfig, FormErrorType } from "./useForm.types";
export declare const useForm: <T extends FormConfigValueType>(config: T) => {
    form: FormConfig<T>;
    formState: FormConfig<T>;
    setValue: (values: Partial<{ [K in keyof T]: T[K]["default"]; }>) => void;
    validate: (form: FormConfig<T>) => FormErrorType[];
    errors: never[];
};
