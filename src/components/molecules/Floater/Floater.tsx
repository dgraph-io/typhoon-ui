/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @jsx jsx */
import { jsx } from "@emotion/react";
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
    color = "grey",
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
                                <Text weight={600} variant={2} color={color}>
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
