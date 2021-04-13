/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ width, children, styles: stylesProp, }: import("./Sidebar.types").SidebarPropsType): JSX.Element;
        displayName: string;
        __docgenInfo: {
            description: string;
            displayName: string;
            props: {
                width: {
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
            };
        };
    };
};
export default _default;
export declare const SidebarStory: {
    (): JSX.Element;
    parameters: any;
};
