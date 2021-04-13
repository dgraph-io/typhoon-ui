import React from "react";
import Avatar from "./Avatar";
import { Stack } from "components";

export default {
    title: "Atoms/Avatar",
    component: Avatar,
};

export const Default = () => (
    <Stack direction="vertical" align="center" gap={2}>
        <Avatar />

        <Avatar variant={5} />

        <Avatar variant={6} />

        <Avatar variant={7} />

        <Avatar variant={8} />
    </Stack>
);

export const AvatarWithText = () => <Avatar variant={5} text="M" />;

export const AvatarWithTextColor = () => (
    <Avatar variant={8} text="M" color="cadetblue" />
);

export const AvatarWithBackgroundColor = () => (
    <Avatar variant={8} bgColor="pink" text="M" color="white" />
);

export const AvatarWithImage = () => (
    <Avatar
        variant={8}
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
    />
);
