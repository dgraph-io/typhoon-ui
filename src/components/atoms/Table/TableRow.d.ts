import { TableRowPropsType } from "./Table.types";
declare const TableRow: {
    ({ children, styles: stylesProp, clickable, onClick, ...props }: TableRowPropsType): JSX.Element;
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
            clickable: {
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
            onClick: {
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
export default TableRow;
