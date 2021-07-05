/** @jsx jsx */
import { jsx } from "@emotion/core";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { Card, Text, Container } from "components";
import { styles, getPositionStyles } from "./Floater.styles";
import { FloaterPropType } from "./Floater.types";
import { motion, AnimatePresence } from "framer-motion";

const Floater = ({
    show = true,
    position = "right",
    content: Content,
    styles: stylesProp = {},
    onClick,
    children,
}: FloaterPropType) => {
    const theme = useTheme();

    const cardStyles = stylegun({
        css: styles.CardStyles,
        theme,
        component: "Floater",
    });

    const pointerStyles = stylegun({
        css: getPositionStyles(cardStyles.background)[position],
        theme,
    });

    return (
        <Container
            onClick={onClick}
            styles={{
                ...styles.FloaterContainerStyles,
                ...stylesProp,
            }}
        >
            <AnimatePresence>
                {show && (
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: [1, 0] }}
                    >
                        <Card styles={{ ...cardStyles, ...pointerStyles }}>
                            {typeof Content === "string" ? (
                                <Text color="grey" weight={600} variant={2}>
                                    {Content}
                                </Text>
                            ) : (
                                <Content />
                            )}
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </Container>
    );
};

export default Floater;
