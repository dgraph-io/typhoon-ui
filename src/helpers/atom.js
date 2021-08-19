/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
