/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ heading, isOpen, onClose, onContinue, continueLabel, closeLabel, children, continueButtonVariant, hideCloseButton, disableOverlay, disableEscape, disableContinueButton, styles: stylesProp, }: import("./Modal.types").ModalPropsType): JSX.Element;
        displayName: string;
        __docgenInfo: {
            description: string;
            displayName: string;
            props: {
                closeLabel: {
                    defaultValue: {
                        value: string;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                continueLabel: {
                    defaultValue: {
                        value: string;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                styles: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                heading: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                isOpen: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                onClose: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                onContinue: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                hideCloseButton: {
                    defaultValue: {
                        value: boolean;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                continueButtonVariant: {
                    defaultValue: {
                        value: string;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                disableEscape: {
                    defaultValue: {
                        value: boolean;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                disableOverlay: {
                    defaultValue: {
                        value: boolean;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                disableContinueButton: {
                    defaultValue: {
                        value: boolean;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
            };
        };
    };
};
export default _default;
export declare const ModalControlled: {
    (): JSX.Element;
    parameters: any;
};
export declare const ModalOpenWithoutContinue: {
    (): JSX.Element;
    parameters: any;
};
export declare const ModalOpenWithOnContinue: {
    (): JSX.Element;
    parameters: any;
};
