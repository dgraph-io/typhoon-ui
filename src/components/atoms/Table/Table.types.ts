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

export interface TablePropsType {
    children: React.ReactNode;
    fullWidth?: boolean;
    styles?: Object;
}

export interface TableBodyPropsType {
    children: React.ReactNode;
    styles?: Object;
}

export interface TableDescriptionPropsType {
    children: React.ReactNode | string;
    styles?: Object;
    colSpan?: number;
}

export interface TableHeadPropsType {
    align?: "left" | "right" | "center";
    children: React.ReactNode;
    styles?: Object;
}

export interface TableRowPropsType
    extends React.HTMLProps<HTMLTableRowElement> {
    children?: React.ReactNode;
    styles?: Object;
    clickable?: boolean;
    onClick?: () => void;
    tabIndex?: number;
    onKeyPress?: any;
    ref?: any;
}

export interface TableHeadingPropsType {
    children?: React.ReactNode;
    styles?: Object;
    colSpan?: number;
}
