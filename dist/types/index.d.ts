import { CSSObject } from "@emotion/react";
export interface StylesObject extends CSSObject {
    zIndex?: number | string;
    boxShadow?: number | string;
    marginX?: number | string;
    marginY?: number | string;
    paddingX?: number | string;
    paddingY?: number | string;
    size?: number | string;
    borderX?: number | string;
    borderY?: number | string;
    borderTopRadius?: number | string;
    borderBottomRadius?: number | string;
    borderLeftRadius?: number | string;
    borderRightRadius?: number | string;
}
