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

import { flatten } from "./helpers/utils";

let tokens: Record<string, any> = {
    space: [
        "0px",
        "8px",
        "16px",
        "24px",
        "32px",
        "40px",
        "48px",
        "56px",
        "64px",
        "72px",
        "80px",
        "160px",
    ],
    fonts: {
        primary: `"DM Sans", sans-serif`,
    },
    fontSizes: ["0px", "12px", "14px", "16px", "20px", "24px", "32px", "40px"],
    breakpoints: ["576px", "768px", "992px"],
    lineThickness: [0, "1px", "4px"],
    radii: ["0", "2px", "4px", "50%", "999999px"],
    colors: {
        gradient: {
            brand: "linear-gradient(90deg, #FF4200 .01%, #E50695 99.99%)",
        },
        pink: {
            default: "#FF206E",
            light: "#ffc0d6",
            translucent: "rgba(255, 32, 110, 0.1)",
        },
        grey: {
            default: "#555555",
            dark: "#222222",
            light: "#9E9E9E",
            border: "#D6D6D6",
            selected: "#F3F4F5",
            surface: "#FAFAFA",
        },
        red: {
            default: "#ff4444",
            surface: "#FFF6F6",
        },
        white: {
            default: "#FFFFFF",
        },
        blue: {
            default: "#4e6fff",
            light: " #acdbff",
            dark: "#1A567E",
            surface: "#D9EDF7",
        },
        green: {
            default: "#32a653",
            surface: "#ECF7E7",
        },
        yellow: {
            default: "#ffd95c",
            dark: "#86681D",
            surface: "#FEF7E3",
        },
        alert: "#EFF8FF",
        purple: {
            default: "#5A59C6",
            text: "#3A1A7E",
            surface: "#F3F2FC",
        },
    },
    shadows: {
        0: "none",
        1: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        2: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        3: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0px 6px -2px rgba(0, 0, 0, 0.1)",
        4: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    zIndices: {
        marianatrench: -999999,
        default: 1,
        sidebar: 3000,
        navbar: 4000,
        tooltip: 5000,
        dropdown: 6000,
        overlay: 80000,
        modal: 90000,
        toast: 10000,
    },
};

tokens.sizes = { ...tokens.space };

tokens.focus = {
    boxShadow: `0 0 0 ${tokens.lineThickness[2]} ${tokens.colors.pink.light}`,
    border: `${tokens.lineThickness[1]} solid ${tokens.colors.pink.default}`,
};

// Atoms

const components = {
    Button: {
        fontFamily: "primary",
        background: "pink",
        color: "white",
        border: 0,
        variants: {
            scream: {
                background: "red",
                color: "white",
            },
            yell: {
                background: "pink",
                color: "white",
            },
            cheer: {
                border: "{{lineThickness.1}} solid {{colors.grey.border}}",
                background: "transparent",
                color: "pink",
            },
            murmur: {
                border: "{{lineThickness.1}} solid {{colors.grey.border}}",
                background: "transparent",
                color: "grey",
            },
            whistle: {
                background: "transparent",
                color: "pink",
            },
            ghost: {
                background: "transparent",
                color: "grey",
                "&:hover": {
                    transition: "200ms background ease-out",
                    background: "grey.surface",
                },
            },
        },
    },
    Card: {
        background: "white",
        boxShadow: 1,
    },
    Input: {
        color: "grey",
        fontFamily: "primary",
        background: "white",
        borderWidth: "{{lineThickness.1}}",
        borderStyle: "solid",
        borderColor: "{{colors.grey.border}}",
        ":focus": {
            outline: "none",
            border: "{{focus.border}}",
        },
        variants: {
            small: {
                height: "{{space.5}}",
                fontSize: "{{fontSizes.3}}",
            },
            medium: {
                height: "{{space.6}}",
                fontSize: "{{fontSizes.4}}",
            },
            large: {
                height: "{{space.7}}",
                fontSize: "{{fontSizes.5}}",
            },
        },
    },
    Heading: {
        color: "grey.dark",
        fontFamily: "primary",
        fontWeight: 700,
        variants: {
            1: {
                fontSize: `${tokens.fontSizes[6]}`,
            },
            2: {
                fontSize: `${tokens.fontSizes[5]}`,
            },
            3: {
                fontSize: `${tokens.fontSizes[4]}`,
            },
            4: {
                fontSize: `${tokens.fontSizes[3]}`,
            },
            5: {
                fontSize: `${tokens.fontSizes[2]}`,
            },
            6: {
                fontSize: `${tokens.fontSizes[1]}`,
            },
        },
    },
    Text: {
        fontFamily: "primary",
        variants: {
            1: {
                fontSize: `${tokens.fontSizes[1]}`,
            },
            2: {
                fontSize: `${tokens.fontSizes[2]}`,
            },
            3: {
                fontSize: `${tokens.fontSizes[3]}`,
            },
            4: {
                fontSize: `${tokens.fontSizes[4]}`,
            },
            5: {
                fontSize: `${tokens.fontSizes[5]}`,
            },
            6: {
                fontSize: `${tokens.fontSizes[6]}`,
            },
        },
    },
    Divider: {
        height: "1px",
        border: 0,
        background: "grey.border",
        variants: {
            solid: {
                borderStyle: "solid",
            },
            dashed: {
                borderStyle: "dashed",
            },
        },
    },
    Link: {
        fontFamily: "primary",
        color: "pink",
    },
    Navbar: {
        boxShadow: `${tokens.shadows[2]}`,
    },
    Avatar: {
        variants: {
            "1": {
                size: 3,
            },
            "2": {
                size: 4,
            },
            "3": {
                size: 5,
            },
            "4": {
                size: 6,
            },
            "5": {
                size: 7,
            },
            "6": {
                size: 8,
            },
            "7": {
                size: 9,
            },
            "8": {
                size: 10,
            },
        },
    },
    Floater: {
        background: "white",
        color: "grey",
    },
    Alert: {
        variants: {
            info: {
                background: "blue.surface",
                color: "blue.dark",
            },
            warning: {
                background: "yellow.surface",
                color: "yellow.dark",
            },
            success: {
                background: "green.surface",
                color: "green",
            },
            error: {
                background: "red.surface",
                color: "red",
            },
            tip: {
                background: "purple.surface",
                color: "purple.text",
            },
        },
    },
};

export const theme = { tokens: flatten(tokens), components };
