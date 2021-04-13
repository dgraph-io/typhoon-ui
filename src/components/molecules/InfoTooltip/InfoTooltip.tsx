import React from "react";
import Container from "components/layouts/Container/Container";
import { ReactComponent as InfoIcon } from "./icons/info.svg";
import Tooltip from "../Tooltip/Tooltip";
import { InfoToolTipPropsType } from "./InfoTooltip.types";

const InfoTooltip = ({
    content,
    position = "rightTop",
    styles: stylesProp,
}: InfoToolTipPropsType) => {
    return (
        <Tooltip content={content} position={position} styles={stylesProp}>
            <Container>
                <InfoIcon />
            </Container>
        </Tooltip>
    );
};

export default InfoTooltip;
