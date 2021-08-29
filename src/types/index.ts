import { CSSObject } from "@emotion/react";

export interface StylesObject extends Omit<CSSObject, "zIndex"> {
    zIndex?: number | string;
}
