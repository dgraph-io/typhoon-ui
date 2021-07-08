//? For now we are not using the atom abstraction instead we resolve styles using the method styleGun()
//
// import React from "react";
// import { jsx } from "@emotion/react";
// import { resolveStyles } from "./resolver";
// import PropTypes from "prop-types";

// export const Atom = React.forwardRef(
//     (
//         {
//             styles: stylesProp = {} = {},
//             style: inlineStyles = {},
//             variant = "default",
//             as,
//             component,
//             theme,
//             ...props
//         },
//         ref
//     ) => {
//         let variantStyles = {};
//         if (
//             variant !== "default" &&
//             theme["components"][component]["variants"]
//         ) {
//             if (theme["components"][component]["variants"][variant]) {
//                 variantStyles = resolveStyles(
//                     theme["components"][component]["variants"][variant],
//                     theme
//                 );
//             } else {
//                 console.warn(
//                     `Variant- ${variant} was not found for component ${component}`
//                 );
//             }
//         }
//         return jsx(as, {
//             css: {
//                 ...resolveStyles(cssProp, theme, component),
//                 ...variantStyles,
//             },
//             style: inlineStyles,
//             ref,
//             ...props,
//         });
//     }
// );

// Atom.propTypes = {
//     styles: PropTypes.object,
//     style: PropTypes.object,
//     variant: PropTypes.string,
//     as: PropTypes.string,
//     component: PropTypes.string,
//     theme: PropTypes.object,
// };
