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

export const scales: Record<string, any> = {
    color: "colors",
    backgroundColor: "colors",
    background: "colors",
    borderColor: "colors",
    margin: "space",
    marginTop: "space",
    marginRight: "space",
    marginBottom: "space",
    marginLeft: "space",
    marginInlineStart: "space",
    marginInlineEnd: "space",
    marginX: "space",
    marginY: "space",
    padding: "space",
    paddingTop: "space",
    paddingRight: "space",
    paddingBottom: "space",
    paddingLeft: "space",
    paddingX: "space",
    paddingY: "space",
    top: "space",
    right: "space",
    bottom: "space",
    left: "space",
    gridGap: "space",
    gridColumnGap: "space",
    gridRowGap: "space",
    gap: "space",
    columnGap: "space",
    rowGap: "space",
    backgroundPosition: "space",
    backgroundPositionX: "space",
    backgroundPositionY: "space",
    fontFamily: "fonts",
    fontSize: "fontSizes",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    border: "borders",
    borderTop: "borders",
    borderRight: "borders",
    borderBottom: "borders",
    borderLeft: "borders",
    borderWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderRadius: "radii",
    borderTopRightRadius: "radii",
    borderTopLeftRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    borderTopRadius: "radii",
    borderBottomRadius: "radii",
    borderLeftRadius: "radii",
    borderRightRadius: "radii",
    borderTopWidth: "borderWidths",
    borderTopColor: "colors",
    borderTopStyle: "borderStyles",
    borderBottomWidth: "borderWidths",
    borderBottomColor: "colors",
    borderBottomStyle: "borderStyles",
    borderLeftWidth: "borderWidths",
    borderLeftColor: "colors",
    borderLeftStyle: "borderStyles",
    borderRightWidth: "borderWidths",
    borderRightColor: "colors",
    borderRightStyle: "borderStyles",
    outlineColor: "colors",
    boxShadow: "shadows",
    textShadow: "shadows",
    zIndex: "zIndices",
    width: "sizes",
    minWidth: "sizes",
    maxWidth: "sizes",
    height: "sizes",
    minHeight: "sizes",
    maxHeight: "sizes",
    flexBasis: "sizes",
    size: "sizes",
    transitionDuration: "durations",
    animationDuration: "durations",
    animationDelay: "durations",
    // svg
    fill: "colors",
    stroke: "colors",
};

export const shortcuts: Record<string, any> = {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    size: ["width", "height"],
    borderX: ["borderLeft", "borderRight"],
    borderY: ["borderBottom", "borderTop"],
    borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
    borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    borderLeftRadius: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    borderRightRadius: ["borderTopRightRadius", "borderBottomRightRadius"],
};

export const keyCodes = {
    SPACEBAR: 32,
    ENTER: 13,
    UP: 38,
    DOWN: 40,
    ESCAPE: 27,
    TAB: 9,
};

export const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
