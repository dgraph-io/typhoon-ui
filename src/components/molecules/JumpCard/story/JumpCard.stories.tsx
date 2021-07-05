import React from "react";
import JumpCard from "../JumpCard";

import { ReactComponent as VidePlayIcon } from "./icons/videoplay.svg";
import { ReactComponent as LinkIcon } from "./icons/link.svg";
import { ReactComponent as InviteIcon } from "./icons/invite.svg";
import { ReactComponent as GuideIllustration } from "./illustrations/guide.svg";
import { ReactComponent as QuickStartIllustration } from "./illustrations/quickstart.svg";
import { ReactComponent as ShareIllustraion } from "./illustrations/share.svg";
import { ReactComponent as RocketIllustration } from "./illustrations/rocket.svg";

import { FocusVisibleManager } from "hooks/useFocusVisible";
import { Button, Stack } from "components";

export default {
    title: "App/JumpCard",
    component: JumpCard,
};

const cards = [
    {
        heading: "Quick Start Video",
        description:
            "Step-by-step tutorial on how to create your first backend",
        Illustration: QuickStartIllustration,
        Icon: VidePlayIcon,
        type: "clickable",
        onClick: () => console.log("clicked"),
    },
    {
        heading: "GraphQL Guide",
        description:
            "  Everything you need to know to get started with GraphQL",
        Illustration: GuideIllustration,
        Icon: LinkIcon,
        type: "link",
        href: "/",
    },

    {
        heading: "Share the love",
        description: "  Send an exclusive invite to your friends(or fans)!",
        Illustration: ShareIllustraion,
        Icon: InviteIcon,
        type: "link",
        to: "/",
    },

    {
        type: "card",
        heading: "Quick Tour",
        description: "Get started in minutes and launch your GraphQL backend",
        Illustration: RocketIllustration,
        ActionElement: () => (
            <Button onClick={() => console.log("clicked")}>Get Started</Button>
        ),
        onClick: () => console.log("clicked"),
    },
];

export const JumpCardDefault = () => (
    <FocusVisibleManager>
        <Stack gap={2} direction="vertical">
            {cards.map(card => (
                // @ts-ignore
                <JumpCard card={card} key={card.description} />
            ))}
        </Stack>
    </FocusVisibleManager>
);
