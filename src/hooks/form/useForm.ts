import { useCallback, useState } from "react";
import {
    FormConfigValueType,
    FormConfig,
    FormErrorType,
} from "./useForm.types";

import { convertToFormState, getFormValues, getErrors } from "./utils";

export const useForm = <T extends FormConfigValueType>(config: T) => {
    const [formState, setFormState] = useState(
        convertToFormState(config, true)
    );

    const setValue = useCallback(
        (values: Partial<{ [K in keyof T]: T[K]["default"] }>) =>
            setFormState(prevState => {
                return getFormValues<T>(values, prevState, config);
            }),
        [config]
    );

    const validate = useCallback(
        (form: FormConfig<T>) => {
            const errors = [] as Array<FormErrorType>;
            return errors.concat(
                ...Object.keys(form).map(key => {
                    return getErrors(key, form[key].value, config[key].rules);
                })
            );
        },
        [config]
    );

    const form = Object.keys(formState).reduce((agg, key) => {
        return {
            ...agg,
            [key]: {
                ...formState[key],
                onChange: (event: any) => {
                    //@ts-ignore
                    setValue({ [key]: event.target.value });
                },
            },
        };
    }, {} as FormConfig<T>);

    return {
        form,
        formState,
        setValue,
        validate,
        errors: [],
    };
};
