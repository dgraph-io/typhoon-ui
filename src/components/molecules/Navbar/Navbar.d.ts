/// <reference types="react" />
import { NavbarPropsType } from "./Navbar.types";
declare const Navbar: {
    ({ children, styles: stylesProp }: NavbarPropsType): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
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
export default Navbar;
