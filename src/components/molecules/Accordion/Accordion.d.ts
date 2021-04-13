/// <reference types="react" />
import { AccordionPropsType } from "./Accordion.types";
declare function Accordion({ selected, children, onSelect, styles: stylesProp, }: AccordionPropsType): JSX.Element;
declare namespace Accordion {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            selected: {
                defaultValue: null;
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
            onSelect: {
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
}
export default Accordion;
