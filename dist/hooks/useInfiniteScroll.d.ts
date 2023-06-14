/// <reference types="react" />
export declare const useInfiniteScroll: ({ onBottom, offsetY, }: {
    onBottom: () => Promise<any>;
    offsetY?: number | undefined;
}) => import("react").MutableRefObject<any>;
