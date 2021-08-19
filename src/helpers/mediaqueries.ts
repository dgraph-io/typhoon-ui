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

const breakpoints: Array<Number> = [500, 800, 1200, 1400];

export const maxWidth = breakpoints.map(
    breakPoint => `@media (max-width: ${breakPoint}px)`
);

export const minWidth = breakpoints.map(
    breakPoint => `@media (min-width: ${breakPoint}px)`
);
