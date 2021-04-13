

/** @jsx jsx */
import { jsx } from "@emotion/core";
import Container from "components/layouts/Container/Container";
import { useHover } from "hooks/useHover";
import Floater from "../Floater/Floater";
import { TooltipPropsType } from "./Tooltip.types";

export const Tooltip = ({
    content,
    position = "right",
    children,
    styles = {},
}: TooltipPropsType) => {
    const { ref, isHovered } = useHover();
    return (
        <Container ref={ref} styles={{ cursor: "pointer" }}>
            <Floater
                show={isHovered}
                content={content}
                position={position}
                styles={styles}
            >
                {children}
            </Floater>
        </Container>
    );
};

export default Tooltip;
