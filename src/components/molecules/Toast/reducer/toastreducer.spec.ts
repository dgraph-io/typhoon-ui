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
