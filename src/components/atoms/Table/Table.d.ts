import { TablePropsType } from "./Table.types";
declare const Table: {
    ({ styles: stylesProp, children, fullWidth, ...props }: TablePropsType): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            fullWidth: {
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
export default Table;
