import React from "react";
import Image from "./Image";

export default {
    title: "Atoms/Image",
    component: Image,
};

export const Default = () => (
    <Image
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"
        alt="design system"
    />
);

export const ImageWithWidth = () => (
    <Image
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"
        alt="design system"
        css={{ width: "40%" }}
    />
);
