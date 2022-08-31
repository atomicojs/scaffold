---
{
    tags: ["{%", "%}"],
    questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```jsx {%name|kebabCase%}/{%name|kebabCase%}.tsx
import { Props, c, css } from "atomico";

function {%name|camelCase%}({ myProp }:Props<typeof {%name|camelCase%}>) {
  return (
    <host shadowDom>
      <h1>{%name|kebabCase%} : {myProp}</h1>
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

customElements.define("{%name|kebabCase%}", {%name|pascalCase%});
```
