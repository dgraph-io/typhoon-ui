import { flatten, merge, titleCase } from "../utils";

describe("inputs for func flatten", () => {
    const objectToFlatten = {
        abc: "xyz",
        array: [1, 2, 3],
        someArrayOfObjects: [{ abc: 1 }, { xyz: 2 }],
    };

    const listToFlatten = ["10px", "12px", "14px"];

    test("for object", () => {
        const flattenedObject = flatten(objectToFlatten);
        expect(flattenedObject.abc).toBe("xyz");
        expect(flattenedObject["array.0"]).toBe(1);
        expect(flattenedObject["array.1"]).toBe(2);
        expect(flattenedObject["someArrayOfObjects.0.abc"]).toBe(1);
    });

    test("for list", () => {
        const flattenedList = flatten(listToFlatten);
        expect(flattenedList["0"]).toBe("10px");
        expect(flattenedList["1"]).toBe("12px");
        expect(flattenedList["2"]).toBe("14px");
    });
});
describe("scenarios for titleCase", () => {
    test("for empty text", () => {
        const result = titleCase("");
        expect(result).toBe("");
    });

    test("for some words in text", () => {
        const result = titleCase("someone said there is a bug");
        expect(result).toBe("Someone Said There Is A Bug");
    });
});

describe("object deep merge", () => {
    const obj1 = {
        token: {
            spaces: [1, 2, 3, 4],
            color: {
                white: "#FFFFFF",
            },
        },
        components: {
            Button: {
                variants: {
                    cheer: {
                        color: "red",
                        background: "orange",
                    },
                    ghost: {
                        color: "white",
                        background: "green",
                        ":hover": {
                            background: "blue",
                        },
                    },
                },
            },
        },
    };

    const obj2 = {
        components: {
            Button: {
                variants: {
                    cheer: {
                        color: "white",
                    },
                    ghost: {
                        color: "white",
                        background: "transparent",
                        ":hover": {
                            background: "transparent",
                        },
                    },
                },
            },
        },
    };

    test("for object", () => {
        const mergedObject = merge(obj1, obj2);
        expect(mergedObject.token.spaces[1]).toBe(2);
        expect(mergedObject.token.color.white).toBe("#FFFFFF");
        expect(mergedObject.components.Button.variants.cheer.color).toBe(
            "white"
        );
        expect(mergedObject.components.Button.variants.cheer.background).toBe(
            "orange"
        );
        expect(mergedObject.components.Button.variants.cheer.background).toBe(
            "orange"
        );
        expect(
            mergedObject.components.Button.variants.ghost[":hover"].background
        ).toBe("transparent");
    });
});
