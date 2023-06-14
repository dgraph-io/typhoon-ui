# 🌀 typhoon-ui
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/dgraph-io/typhoon-ui/blob/main/LICENSE) [![node](https://img.shields.io/badge/node-10.14.6-brightgreen.svg)](https://github.com/dgraph-io/typhoon-ui) [![npm version](https://badge.fury.io/js/%40dgraph-io%2Ftyphoon-ui.svg)](https://badge.fury.io/js/%40dgraph-io%2Ftyphoon-ui)

[➡ View Component Library](https://typhoon-ui.dgraph.io/?path=/story/atoms-avatar--default)


[Note: This is a work in progress, API is subject to change]
## Installation

```
npm i @dgraph-io/typhoon-ui
```

## Design System Concepts

### **Theme**

Theme is just a map of tokens & components

```
{ tokens: { ... }, components: { ... }}
```

Theme can be accessed from `useTheme` hook, which gets access to theme object from the `ThemeContext`. You only need this while creating atoms or molecules.

### **Tokens**

Tokens is a map of values which allow us to build a contraint based design. There is a mapping of CSS properties with the tokens, which can be found in `helpers/constants`. Every component in the design system is able to resolve the styles against these tokens. Lets see some examples -

Example -

1. `marginTop: 1`

    Since `marginTop` is mapped to `tokens.space`

    This will resolve to `marginTop: tokens.space[1]` => `marginTop: 8px`

2. `background : "pink.light"`

    Since `background` is mapped to `tokens.colors`

    This will resolve to `background: tokens.colors.pink.light` => `background: #ffc0d6`

Every component in the design system is able to resolve the styles

**Shortcuts**

There are shortcuts configured as well which are defined in `helpers/constants`

Example -

`marginX: ...`

will be resolved to -

```
marginLeft: ... ,
marginRight: ...
```

**Advanced**

We can resolve tokens within a string as well like -

Example-

`border: {{lineThickness.1}} solid {{colors.pink.light}}`

This resolves to

`border: {{lineThickness.1}} solid {{colors.pink.light}}`

Any valid key between `{{ }}` will be resolved against token values.

---
