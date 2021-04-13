import React from "react";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { Stack, Button, Container } from "components";
import {
    AccordionPropsType,
    ChevronContainerPropsType,
} from "./Accordion.types";
import { styles } from "./Accordion.styles";

const ChevronContainer = ({ isOpen }: ChevronContainerPropsType) => (
    <Container
        styles={{
            ...styles.ChevronStyles,
            transform: isOpen
                ? "rotate(-135deg) translateX(-3px)"
                : "rotate(45deg) translateY(-3px)",
        }}
    />
);

function Accordion({
    selected,
    children,
    onSelect,
    styles: stylesProp = {},
}: AccordionPropsType) {
    const theme = useTheme();

    const accordionItems = React.Children.toArray(children).map(
        (item: any) => item.props
    );

    return (
        <Stack direction="vertical" styles={stylesProp}>
            {accordionItems.map(({ label, id, children }) => {
                const isOpen = selected === id;
                return (
                    <React.Fragment key={id}>
                        <Button
                            variant="whistle"
                            styles={{ paddingX: 0 }}
                            onClick={() => {
                                onSelect(isOpen ? null : id);
                            }}
                        >
                            <Stack align="center" justify="space-between">
                                {label}
                                <ChevronContainer isOpen={isOpen} />
                            </Stack>
                        </Button>
                        {isOpen && (
                            <Container
                                styles={stylegun({
                                    css: styles.AccordionItemContent,
                                    theme,
                                })}
                            >
                                {children}
                            </Container>
                        )}
                    </React.Fragment>
                );
            })}
        </Stack>
    );
}

export default Accordion;
