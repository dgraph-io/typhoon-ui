import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { PortalType } from "./Portal.types";

const Portal = ({ children }: PortalType) => {
    const portalRoot = document.body;
    const mountElement = useMemo(() => document.createElement("div"), []);
    useEffect(() => {
        portalRoot.appendChild(mountElement);
        return () => {
            portalRoot.removeChild(mountElement);
        };
    }, [mountElement, portalRoot]);
    return createPortal(children, mountElement);
};

export default Portal;
