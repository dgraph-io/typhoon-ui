export declare type PaginatorPropsType = {
    total: number;
    offset: number;
    size: number;
    sizeRange: Array<number>;
    onChange: ({ offset, size }: {
        offset: number;
        size: number;
    }) => void;
};
