/** @jsx jsx */
import { jsx } from "@emotion/core";
import { styles } from "./JumpCard.styles";
import { Card, Heading, Link, Stack, Text } from "components";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";
import { JumpCardPropsType } from "./JumpCard.types.js";

const CardLayout = ({
    card,
    styles: stylesProp = {},
}: JumpCardPropsType): JSX.Element => {
    const { Icon, Illustration, ActionElement, type, onClick } = card;
    const theme = useTheme();
    return (
        <Card
            styles={{ ...styles.JumpCardStyles, ...stylesProp }}
            {...(type === "clickable"
                ? { clickable: true, onClick: onClick }
                : {})}
        >
            <Stack
                align="flex-start"
                direction="vertical"
                gap={1}
                styles={styles.JumpCardContentStyles}
            >
                <Heading>{card.heading}</Heading>

                <Text>{card.description}</Text>
                {Icon && (
                    <Icon css={stylegun({ css: styles.IconStyles, theme })} />
                )}
                {Illustration && (
                    <Illustration
                        style={{
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                        }}
                    />
                )}
                {ActionElement && <ActionElement onClick={onClick} />}
            </Stack>
        </Card>
    );
};

const JumpCard = ({ card, styles: stylesProp = {} }: JumpCardPropsType) => {
    if (card.type === "link") {
        return (
            <Link
                styles={{ ...styles.JumpCardContainerStyles, ...stylesProp }}
                href={card.href}
                openInNewTab={true}
            >
                <CardLayout card={card} />
            </Link>
        );
    } else if (card.type === "custom" && card.Container) {
        const { Container } = card;
        return (
            <Container
                styles={{ ...styles.JumpCardContainerStyles, ...stylesProp }}
            >
                <CardLayout card={card} />
            </Container>
        );
    } else {
        return (
            <CardLayout
                card={card}
                styles={{ ...styles.JumpCardContainerStyles, ...stylesProp }}
            />
        );
    }
};

export default JumpCard;
