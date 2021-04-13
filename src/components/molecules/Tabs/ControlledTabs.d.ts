/// <reference types="react" />
import PropTypes from "prop-types";
import { ControlledTabsPropsType } from "./Tabs.types";
declare const ControlledTabs: {
    ({ defaultSelected, ...props }: ControlledTabsPropsType): JSX.Element;
    propTypes: {
        defaultSelected: PropTypes.Requireable<string>;
    };
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            defaultSelected: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            showDivider: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            tabWidth: {
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
export default ControlledTabs;
