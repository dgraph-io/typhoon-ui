import React from "react";
import Alert from "./Alert";

export default {
    title: "Molecules/Alert",
    component: Alert,
};

export const AlertDefault = () => {
    return (
        <Alert heading="Did you know?">
            Here is something that you might like to know
        </Alert>
    );
};

export const AlertWarning = () => {
    return (
        <Alert variant="warning" heading="Are you sure you want to leave?">
            Your information has not been saved.
        </Alert>
    );
};

export const AlertSuccess = () => {
    return (
        <Alert variant="success" heading="Yay! Everything worked!">
            Congrats on the internet loading your request.
        </Alert>
    );
};

export const AlertError = () => {
    return (
        <Alert variant="error" heading="Uh oh, something went wrong">
            Sorry! There was a problem with your request.
        </Alert>
    );
};

export const AlertTip = () => {
    return (
        <Alert variant="tip" heading="Here is a tip">
            Here are some tips.
        </Alert>
    );
};
