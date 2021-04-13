import React, { useState } from "react";
import { FocusVisibleManager } from "hooks/useFocusVisible";
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
        <FocusVisibleManager>
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
        </FocusVisibleManager>
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
        <FocusVisibleManager>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal
                heading={"This is a modal heading"}
                isOpen={isOpen}
                onClose={closeModal}
            />
        </FocusVisibleManager>
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
        <FocusVisibleManager>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal
                heading={"This is a modal heading"}
                isOpen={isOpen}
                onClose={closeModal}
                onContinue={closeModal}
            />
        </FocusVisibleManager>
    );
};
