

/** @jsx jsx */
import React from "react";
import { TourElementPropsType, TourPropsType, TourContextPropsType } from "./Tour.types";
export declare const TourContext: React.Context<TourContextPropsType>;
declare const Tour: {
    ({ steps, tourId, children }: TourPropsType): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            steps: {
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
            tourId: {
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
export declare const TourElement: {
    ({ id, children, ...restProps }: TourElementPropsType): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            id: {
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
        };
    };
};
export default Tour;
