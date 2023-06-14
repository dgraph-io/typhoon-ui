import React from "react";
export declare const ThemeContext: React.Context<{
    tokens: any;
    components: {
        Button: {
            fontFamily: string;
            background: string;
            color: string;
            border: number;
            variants: {
                scream: {
                    background: string;
                    color: string;
                };
                yell: {
                    background: string;
                    color: string;
                };
                cheer: {
                    border: string;
                    background: string;
                    color: string;
                };
                murmur: {
                    border: string;
                    background: string;
                    color: string;
                };
                whistle: {
                    background: string;
                    color: string;
                };
                ghost: {
                    background: string;
                    color: string;
                    "&:hover": {
                        transition: string;
                        background: string;
                    };
                };
            };
        };
        Card: {
            background: string;
            boxShadow: number;
        };
        Input: {
            color: string;
            fontFamily: string;
            background: string;
            borderWidth: string;
            borderStyle: string;
            borderColor: string;
            ":focus": {
                outline: string;
                border: string;
            };
            variants: {
                small: {
                    height: string;
                    fontSize: string;
                };
                medium: {
                    height: string;
                    fontSize: string;
                };
                large: {
                    height: string;
                    fontSize: string;
                };
            };
        };
        Heading: {
            color: string;
            fontFamily: string;
            fontWeight: number;
            variants: {
                1: {
                    fontSize: string;
                };
                2: {
                    fontSize: string;
                };
                3: {
                    fontSize: string;
                };
                4: {
                    fontSize: string;
                };
                5: {
                    fontSize: string;
                };
                6: {
                    fontSize: string;
                };
            };
        };
        Text: {
            fontFamily: string;
            variants: {
                1: {
                    fontSize: string;
                };
                2: {
                    fontSize: string;
                };
                3: {
                    fontSize: string;
                };
                4: {
                    fontSize: string;
                };
                5: {
                    fontSize: string;
                };
                6: {
                    fontSize: string;
                };
            };
        };
        Divider: {
            height: string;
            border: number;
            background: string;
            variants: {
                solid: {
                    borderStyle: string;
                };
                dashed: {
                    borderStyle: string;
                };
            };
        };
        Link: {
            fontFamily: string;
            color: string;
        };
        Navbar: {
            boxShadow: string;
        };
        Avatar: {
            variants: {
                "1": {
                    size: number;
                };
                "2": {
                    size: number;
                };
                "3": {
                    size: number;
                };
                "4": {
                    size: number;
                };
                "5": {
                    size: number;
                };
                "6": {
                    size: number;
                };
                "7": {
                    size: number;
                };
                "8": {
                    size: number;
                };
            };
        };
        Floater: {
            background: string;
            color: string;
        };
        Alert: {
            variants: {
                info: {
                    background: string;
                    color: string;
                };
                warning: {
                    background: string;
                    color: string;
                };
                success: {
                    background: string;
                    color: string;
                };
                error: {
                    background: string;
                    color: string;
                };
                tip: {
                    background: string;
                    color: string;
                };
            };
        };
    };
}>;
export declare const ThemeProvider: ({ children, value, }: {
    children: React.ReactNode;
    value: any;
}) => JSX.Element;
export declare const useTheme: () => {
    tokens: any;
    components: {
        Button: {
            fontFamily: string;
            background: string;
            color: string;
            border: number;
            variants: {
                scream: {
                    background: string;
                    color: string;
                };
                yell: {
                    background: string;
                    color: string;
                };
                cheer: {
                    border: string;
                    background: string;
                    color: string;
                };
                murmur: {
                    border: string;
                    background: string;
                    color: string;
                };
                whistle: {
                    background: string;
                    color: string;
                };
                ghost: {
                    background: string;
                    color: string;
                    "&:hover": {
                        transition: string;
                        background: string;
                    };
                };
            };
        };
        Card: {
            background: string;
            boxShadow: number;
        };
        Input: {
            color: string;
            fontFamily: string;
            background: string;
            borderWidth: string;
            borderStyle: string;
            borderColor: string;
            ":focus": {
                outline: string;
                border: string;
            };
            variants: {
                small: {
                    height: string;
                    fontSize: string;
                };
                medium: {
                    height: string;
                    fontSize: string;
                };
                large: {
                    height: string;
                    fontSize: string;
                };
            };
        };
        Heading: {
            color: string;
            fontFamily: string;
            fontWeight: number;
            variants: {
                1: {
                    fontSize: string;
                };
                2: {
                    fontSize: string;
                };
                3: {
                    fontSize: string;
                };
                4: {
                    fontSize: string;
                };
                5: {
                    fontSize: string;
                };
                6: {
                    fontSize: string;
                };
            };
        };
        Text: {
            fontFamily: string;
            variants: {
                1: {
                    fontSize: string;
                };
                2: {
                    fontSize: string;
                };
                3: {
                    fontSize: string;
                };
                4: {
                    fontSize: string;
                };
                5: {
                    fontSize: string;
                };
                6: {
                    fontSize: string;
                };
            };
        };
        Divider: {
            height: string;
            border: number;
            background: string;
            variants: {
                solid: {
                    borderStyle: string;
                };
                dashed: {
                    borderStyle: string;
                };
            };
        };
        Link: {
            fontFamily: string;
            color: string;
        };
        Navbar: {
            boxShadow: string;
        };
        Avatar: {
            variants: {
                "1": {
                    size: number;
                };
                "2": {
                    size: number;
                };
                "3": {
                    size: number;
                };
                "4": {
                    size: number;
                };
                "5": {
                    size: number;
                };
                "6": {
                    size: number;
                };
                "7": {
                    size: number;
                };
                "8": {
                    size: number;
                };
            };
        };
        Floater: {
            background: string;
            color: string;
        };
        Alert: {
            variants: {
                info: {
                    background: string;
                    color: string;
                };
                warning: {
                    background: string;
                    color: string;
                };
                success: {
                    background: string;
                    color: string;
                };
                error: {
                    background: string;
                    color: string;
                };
                tip: {
                    background: string;
                    color: string;
                };
            };
        };
    };
};
