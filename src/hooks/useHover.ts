import { useRef, useState, useEffect, MutableRefObject } from "react";

export const useHover = () => {
    const [value, setValue] = useState(false);
    const ref: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            let timeout: any;
            const handleMouseOver = () => {
                clearTimeout(timeout);
                setValue(true);
                node.removeEventListener("mouseleave", handleMouseOut);
                node.addEventListener("mouseleave", handleMouseOut);
            };

            const handleMouseOut = () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    setValue(false);
                }, 1000);
            };

            node.addEventListener("mouseenter", handleMouseOver);
            return () => {
                clearTimeout(timeout);
                node.removeEventListener("mouseenter", handleMouseOver);
                node.removeEventListener("mouseleave", handleMouseOut);
            };
        }
    }, [ref]);

    return { ref, isHovered: value };
};
