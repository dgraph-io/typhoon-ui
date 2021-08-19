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

import { stylegun } from "../stylegun";
import { flatten } from "../utils";

describe("stylegun", () => {
    const theme = {
        tokens: flatten({
            space: ["10px", "20px", "30px"],
            sizes: ["10px", "20px", "30px"],
            colors: {
                orange: {
                    default: "#ffd787",
                    light: "#ffd787",
                },
            },
        }),
        components: {
            SomeComponent: {
                background: "orange",
                variant: {
                    lighter: {
                        background: "orange.light",
                    },
                },
            },
        },
    };
    const css = {
        size: 2,
        paddingX: 1,
        marginTop: 2,
        "@media(min-width: 420px)": {
            color: "orange.light",
        },
    };

    const component = "SomeComponent";

    const variant = "lighter";

    test("with theme, nested css, variant and component", () => {
        const resolvedStyles = stylegun({ css, theme, component, variant });
        expect(resolvedStyles["height"]).toBe("30px");
        expect(resolvedStyles["width"]).toBe("30px");
        expect(resolvedStyles["paddingLeft"]).toBe("20px");
        expect(resolvedStyles["paddingRight"]).toBe("20px");
        expect(resolvedStyles["@media(min-width: 420px)"]["color"]).toBe(
            "#ffd787"
        );
        expect(resolvedStyles["background"]).toBe("#ffd787");
    });
});
