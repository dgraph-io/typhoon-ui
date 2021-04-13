/// <reference types="react" />
import { SidebarPropsType } from "./Sidebar.types";
declare const Sidebar: {
    ({ width, children, styles: stylesProp, }: SidebarPropsType): JSX.Element;
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
export default Sidebar;
