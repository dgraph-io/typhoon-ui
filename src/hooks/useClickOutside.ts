import { MutableRefObject, useEffect } from "react";

export const useOnClickOutside = (
    ref: MutableRefObject<any>,
    handler: (event: MouseEvent) => void,
    containerId: string = ""
) => {
    const containerElement = document.getElementById(containerId) || document;
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };

        containerElement.addEventListener("mousedown", listener);

        return () => {
            containerElement.removeEventListener("mousedown", listener);
        };
    }, [ref, handler, containerElement]);
};
