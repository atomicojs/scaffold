---
{
    tags: ["{%", "%}"],
    questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```jsx {%name|kebabCase%}/src/elements.tsx
import { c, css } from "atomico";

function {%name|camelCase%}() {
  return (
    <host shadowDom>
      <slot></slot>
    </host>
  );
}

{%name|camelCase%}.props = {
  myProp: String
};

{%name|camelCase%}.styles = css`
  :host {
    display: block;
  }
`;

export const {%name|pascalCase%} = c({%name|camelCase%});
```

```jsx {%name|kebabCase%}/src/define.tsx
import { {%name|pascalCase%} } from "./elements";
export { {%name|pascalCase%} } from "./elements";

customElements.define("atomico-{%name|kebabCase%}", {%name|pascalCase%});
```

## package.json

```json {%name|kebabCase%}/package.json
{
    "name": "@atomico/{%name|kebabCase%}",
    "version": "1.0.0",
    "type": "module",
    "publishConfig": {
        "access": "public"
    },
    "peerDependencies": {
        "atomico": "*"
    },
    "devDependencies": {
        "@atomico/tsconfig": "^1.0.0"
    },
    "scripts": {
        "step:types": "tsc",
        "step:build": "library src/**/*",
        "step:exports": "exports lib/**/* types/**/* --wrappers --main define",
        "build": "npm run step:types && npm run step:build && npm run step:exports",
        "prepublishOnly": "npm run build"
    }
}
```

## .npmignore

```txt {%name|kebabCase%}/.npmignore
node_modules
tsconfig.json
```

## tsconfig.json

```json {%name|kebabCase%}/tsconfig.json
{
    "extends": "@atomico/tsconfig/base.json",
    "include": ["src/**/*"],
    "compilerOptions": {
        "outDir": "types"
    }
}
```

## vite.config.js

```js {%name|kebabCase%}/vite.config.js
import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: atomico({ cssLiterals: { minify: true, postcss: true } }),
});
```

## define.stories.tsx

```js {%name|kebabCase%}/src/define.stories.tsx
import { {%name|pascalCase%} } from "./define";

export default {
    title: "{%name|kebabCase%}",
};

export const Default = () => <{%name|pascalCase%}/>;
```

## Component documentation

````markdown {%name|kebabCase%}/README.md
## {%name|kebabCase%}

### Properties

| Property | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| myProp   | string | defines the title of the component |

### Slots

| Property   | Type      | Description     |
| ---------- | --------- | --------------- |
| Unassigned | ChildNode | General content |

### Example

```html
<{%name|kebabCase%} my-prop="my value"></{%name|kebabCase%}>
```
````
