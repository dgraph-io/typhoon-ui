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

import React, { useState } from "react";
import Modal from "./Modal";
import { Text, Input, Button } from "components";
import ReactDOM from "react-dom";

export default {
    title: "Molecules/Modal",
    component: Modal,
};

/*eslint-disable */
beforeAll(() => {
    //@ts-ignore This is for getting the storyshots working
    ReactDOM.createPortal = jest.fn(element => {
        return element;
    });
});
/*eslint-enable */

export const ModalControlled = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal
                continueLabel="Submit"
                onContinue={() => {
                    setIsOpen(false);
                }}
                heading={"This is a modal heading"}
                isOpen={isOpen}
                onClose={closeModal}
            >
                <Text>Text from children props</Text>
                <Input placeholder="Field 1" />
                <Input placeholder="Field 2" />
            </Modal>
        </>
    );
};

export const ModalOpenWithoutContinue = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal
                heading={"This is a modal heading"}
                isOpen={isOpen}
                onClose={closeModal}
            />
        </>
    );
};

export const ModalOpenWithOnContinue = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal
                heading={"This is a modal heading"}
                isOpen={isOpen}
                onClose={closeModal}
                onContinue={closeModal}
            />
        </>
    );
};
