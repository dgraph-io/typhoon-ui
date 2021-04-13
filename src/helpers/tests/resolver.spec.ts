import { resolveStyles, resolveTemplateString } from "../resolver";
import { flatten } from "../utils";

describe("resolvers", () => {
    test("resolveTemplateString", () => {
        // Assemble
        const tokens = {
            "space.0": "0px",
            "space.1": "10px",
            "colors.orange.light": "#ffd787",
        };
        const nestedObject = {
            padding: "10px",
            "media query": {
                padding: "12px",
            },
        };

        //Action
        const result1 = resolveTemplateString(
            "{{colors.orange.light}}",
            tokens
        );
        const result2 = resolveTemplateString("{{space.1}}", tokens);
        const result3 = resolveTemplateString(
            "calc(100% - {{space.0}})",
            tokens
        );
        const result4 = resolveTemplateString("{{not.in.token}}", tokens);
        const result5 = resolveTemplateString(nestedObject, tokens);

        //Assert
        expect(result1).toBe("#ffd787");
        expect(result2).toBe("10px");
        expect(result3).toBe("calc(100% - 0px)");
        expect(result4).toBe("{{not.in.token}}");
        expect(JSON.stringify(result5)).toBe(JSON.stringify(nestedObject));
    });
});

describe("resolveStyles", () => {
    const theme = {
        tokens: flatten({
            space: ["10px", "20px", "30px"],
            sizes: ["10px", "20px", "30px"],
            colors: {
                orange: {
                    light: "#ffd787",
                },
            },
        }),
        components: {},
    };
    const css = {
        size: 2,
        paddingX: 1,
        marginTop: 2,
        "@media(min-width: 420px)": {
            color: "orange.light",
        },
    };

    test("with theme and nested css", () => {
        const resolvedStyles = resolveStyles(css, theme);
        expect(resolvedStyles["height"]).toBe("30px");
        expect(resolvedStyles["width"]).toBe("30px");
        expect(resolvedStyles["paddingLeft"]).toBe("20px");
        expect(resolvedStyles["paddingRight"]).toBe("20px");
        expect(resolvedStyles["@media(min-width: 420px)"]["color"]).toBe(
            "#ffd787"
        );
    });
});
