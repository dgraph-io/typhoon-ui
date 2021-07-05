import { ToastType } from "./../Toast.types";
import { toastReducer, Action } from "./toast.reducer";

describe("test toast reducer", () => {
    test("add toast", () => {
        const initialState: ToastType[] = [];

        const action: Action = {
            type: "ADD_TOAST",
            payload: {
                id: "1",
                heading: "Hello World",
                variant: "success",
                description: "Welcome to JS world",
            },
        };
        const updatedState = toastReducer(initialState, action);
        expect(updatedState).toMatchObject([
            {
                id: "1",
                heading: "Hello World",
                variant: "success",
                description: "Welcome to JS world",
            },
        ]);
    });

    test("update toast", () => {
        const initialState: ToastType[] = [
            {
                id: "1",
                heading: "Hello  World",
                variant: "success",
                description: "Welcome to JS world",
            },
        ];

        const action: Action = {
            type: "UPDATE_TOAST",
            payload: {
                id: "1",
                heading: "Hello Updated JS World",
            },
        };

        const updatedState = toastReducer(initialState, action);

        expect(updatedState).toMatchObject([
            {
                id: "1",
                heading: "Hello Updated JS World",
                variant: "success",
                description: "Welcome to JS world",
            },
        ]);
    });

    test("delete toast", () => {
        const initialState: ToastType[] = [
            {
                id: "1",
                heading: "Hello  World",
                variant: "success",
                description: "Welcome to JS world",
            },
        ];

        const action: Action = {
            type: "DELETE_TOAST",
            payload: "1",
        };

        const updatedState = toastReducer(initialState, action);

        expect(updatedState).toMatchObject([]);
    });
});
