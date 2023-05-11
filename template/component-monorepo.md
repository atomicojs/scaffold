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
      <h1>Hi <slot/></h1>
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

```jsx {%name|kebabCase%}/src/index.tsx
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
    "scripts": {
        "step:types": "tsc",
        "step:build": "library src/**/*",
        "step:exports": "exports lib/**/* types/**/* --wrappers",
        "step:watch:types": "tsc --watch",
        "step:watch:build": "library src/**/*  --watch",
        "step:watch:exports": "exports lib/**/* types/**/* --wrappers --watch",
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
    "exclude": ["src/stories"],
    "compilerOptions": {
        "outDir": "types"
    }
}
```

## stories tsconfig.json

```json {%name|kebabCase%}/src/stories/tsconfig.json
{
    "extends": "@atomico/tsconfig/base.json",
    "include": ["*.stories.tsx"]
}
```

## Component story

```tsx {%name|kebabCase%}/src/stories/index.stories.tsx
import { {%name|pascalCase%} } from "@atomico/{%name|kebabCase%}";
import { define } from "@atomico/storybook";

export default {
  title: "components/{%name|kebabCase%}",
  ...define(
    {%name|pascalCase%},
    { // Optional
      argTypes: {
        color: {
          description: "Description..."
        }
      }
    }
)
};

export const Story = (props) =><{%name|pascalCase%} {...props}>Atomico!</{%name|pascalCase%}>;
```

## vite.config.js

```js {%name|kebabCase%}/vite.config.js
import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: atomico({ cssLiterals: { minify: true, postcss: true } }),
});
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
