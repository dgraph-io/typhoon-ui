import React from "react";
import Floater from "./Floater";
import { Button } from "components";
export default {
    title: "Molecules/Floater",
    component: Floater,
};

export const FloaterRight = () => {
    return (
        <>
            <Floater content={"Click here"} position={"right"}>
                <Button variant="yell">Subject</Button>
            </Floater>
        </>
    );
};

export const FloaterLeft = () => {
    return (
        <>
            <Floater content={"Click here"} position={"left"}>
                <Button variant="yell">Subject</Button>
            </Floater>
        </>
    );
};

export const FloaterTop = () => {
    return (
        <>
            <Floater content={"Click here"} position={"top"}>
                <Button variant="yell">Subject</Button>
            </Floater>
        </>
    );
};

export const FloaterBottom = () => {
    return (
        <>
            <Floater content={"Click here"} position={"bottom"}>
                <Button variant="yell">Subject</Button>
            </Floater>
        </>
    );
};
