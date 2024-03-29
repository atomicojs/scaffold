---
{
    tags: ["{%", "%}"],
    questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```jsx {%name|kebabCase%}/src/element.tsx
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
import { {%name|pascalCase%} } from "./element";
export { {%name|pascalCase%} } from "./element";

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
        "build:types": "tsc",
        "build:compile": "library src/**/*",
        "build:exports": "exports lib/**/* types/**/* --wrappers",
        "dev:exports": "exports src/**/* --watch",
        "build": "npm run build:types && npm run build:compile && npm run build:exports",
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

## types

```md {%name|kebabCase%}/types/README.md
This directory is created to make it easier for chokidar to observe the changes when using `@atomico/exports`, if you can delete this README
```

## lib

```md {%name|kebabCase%}/lib/README.md
This directory is created to make it easier for chokidar to observe the changes when using `@atomico/exports`, if you can delete this README
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
