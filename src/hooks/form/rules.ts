import { RuleNameType, RuleType } from "./useForm.types";

export const RULES: Record<RuleNameType, RuleType> = {
    required: {
        type: "required",
        message: "Is required",
        checkIsValid: (value: any) => !(value === undefined || value === null),
    },
    email: {
        type: "email",
        message: "Invalid Email",
        checkIsValid: (value: string) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
        },
    },
    nonEmptyString: {
        type: "nonEmptyString",
        message: "Cannot be empty string",
        checkIsValid: (value: string) => {
            return value.trim();
        },
    },
};
