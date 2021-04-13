export const styles = {
    Overlay: {
        background: "grey.dark",
        position: "fixed",
        zIndex: "overlay",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: "200ms opacity ease-out",
        willChange: "opacity",
    },
    ShowOverlay: {
        opacity: 0.3,
        pointerEvents: "unset",
    },
    HideOverlay: {
        opacity: 0,
        pointerEvents: "none",
    },
    ModalContainer: {
        minWidth: "450px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "modal",
        transition: "200ms opacity  ease-out, 200ms transform  ease-out",
        willChange: "opacity, transform",
    },
    ShowModal: {
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 1,
    },
    HideModal: {
        opacity: 0,
        transition: "none",
        transform: "translate(-50%, -50%) scale(1.05)",
        pointerEvents: "none",
        visibility: "hidden",
    },
};
