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

export const styles = {
    FloaterContainerStyles: {
        position: "relative",
        width: "fit-content",
    },
    CardStyles: {
        zIndex: "toast",
        width: "max-content",
        padding: 1,
        boxShadow: 3,
        border: 0,
    },
};

export const getPositionStyles: any = (color: string) => ({
    rightTop: {
        position: "absolute",
        top: "-8px",
        left: "calc(100% + 12px)",
        "::after": {
            content: "''",
            position: "absolute",
            top: "15px",
            transform: "translateY(-50%)",
            right: "100%",
            width: 0,
            height: 0,
            borderY: "8px solid transparent",
            borderRight: `12px solid ${color}`,
        },
    },
    right: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "calc(100% + 12px)",
        "::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "100%",
            width: 0,
            height: 0,
            borderY: "8px solid transparent",
            borderRight: `12px solid ${color}`,
        },
    },
    left: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "calc(100% + 12px)",
        "::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "100%",
            width: 0,
            height: 0,
            borderY: "8px solid transparent",
            borderLeft: `12px solid ${color}`,
        },
    },
    top: {
        position: "absolute",
        bottom: "calc(100% + 12px)",
        transform: "translateX(-50%)",
        left: "50%",
        "::after": {
            content: "''",
            position: "absolute",
            top: "100%",
            transform: "translateX(-50%)",
            left: "50%",
            width: 0,
            height: 0,
            borderX: "8px solid transparent",
            borderTop: `12px solid ${color}`,
        },
    },
    bottom: {
        position: "absolute",
        top: "calc(100% + 12px)",
        transform: "translateX(-50%)",
        left: "50%",
        "::after": {
            content: "''",
            position: "absolute",
            bottom: "100%",
            transform: "translateX(-50%)",
            left: "50%",
            width: 0,
            height: 0,
            borderX: "8px solid transparent",
            borderBottom: `12px solid ${color}`,
        },
    },
});
