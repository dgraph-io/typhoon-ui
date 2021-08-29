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

import React from "react";
import Avatar from "./Avatar";
import { Stack } from "components";
import { ThemeProvider } from "hooks";
import { theme } from "theme";

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
