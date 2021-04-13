import { useCallback, useEffect, useRef, useState } from "react";

export const useInfiniteScroll = ({
    onBottom,
    offsetY = 100,
}: {
    onBottom: () => Promise<any>;
    offsetY?: number;
}) => {
    const ref = useRef<any>();
    const [loading, setLoading] = useState(false);

    const handleScroll = useCallback(
        async (e: any) => {
            if (
                e.target.scrollHeight - e.target.scrollTop <=
                    e.target.clientHeight + offsetY &&
                !loading
            ) {
                setLoading(true);
                await onBottom();
                setLoading(false);
            }
        },
        [onBottom, loading, setLoading, offsetY]
    );
    useEffect(() => {
        let targetElement: any;
        if (ref && ref.current) {
            targetElement = ref.current;
            ref.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (targetElement) {
                targetElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [handleScroll, ref]);
    return ref;
};
