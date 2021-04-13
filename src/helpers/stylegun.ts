import { getVarianStyles, getComponentStyles } from "./utils";
import { resolveStyles } from "./resolver";
import { StylegunType } from "./helpers.types";

export const stylegun = ({
    css = {},
    theme,
    component,
    variant,
}: StylegunType): Record<string, any> => {
    const componentStyles = getComponentStyles({ component, theme });
    const variantStyles = getVarianStyles({ variant, component, theme });
    const resolvedCSS = resolveStyles(css, theme);
    return {
        ...componentStyles,
        ...variantStyles,
        ...resolvedCSS,
    };
};
