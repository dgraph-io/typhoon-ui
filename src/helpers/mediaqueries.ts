const breakpoints: Array<Number> = [500, 800, 1200, 1400];

export const maxWidth = breakpoints.map(
    breakPoint => `@media (max-width: ${breakPoint}px)`
);

export const minWidth = breakpoints.map(
    breakPoint => `@media (min-width: ${breakPoint}px)`
);
