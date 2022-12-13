---
{
    tags: ["{%", "%}"],
    questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```jsx {%name|kebabCase%}/{%name|kebabCase%}.tsx
import { Props, c, css } from "atomico";

function {%name|camelCase%}({ color }:Props<typeof {%name|camelCase%}>) {
  return (
    <host shadowDom>
      <h1>Component {%name%}</h1>
      <h1>color: {color}</h1>
      <slot/>
    </host>
  );
}

{%name|camelCase%}.props = {
  color: {type: String, value: "tomato"}
};

{%name|camelCase%}.styles = css`
  :host {
    display: block;
  }
`;

export const {%name|pascalCase%} = c({%name|camelCase%});

customElements.define("{%name|kebabCase%}", {%name|pascalCase%});
```

## Component test

```jsx {%name|kebabCase%}/{%name|kebabCase%}.test.tsx
import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { {%name|pascalCase%} } from "./{%name|kebabCase%}";

describe("{%name|pascalCase%}", () => {
  it("default properties", () => {
    const node = fixture<typeof {%name|pascalCase%}>(<{%name|pascalCase%} />);

    expect(node.color).toEqual("tomato");
  });

  it("Check DOM", async () => {
    const node = fixture<typeof {%name|pascalCase%}>(<{%name|pascalCase%} />);

    node.color = "black";

    await node.updated; // or updated

    expect(node.shadowRoot.querySelector("input")).toBeInstanceOf(
      HTMLInputElement
    );
  });
});
```

## Component story

```jsx {%name|kebabCase%}/{%name|kebabCase%}.stories.tsx
import { {%name|pascalCase%} } from "./{%name|kebabCase%}";
import { define } from "@atomico/storybook";

const { args, argTypes } = define(
    {%name|pascalCase%},
    { // Optional
      color: {
        category: "Colors",
        description: "Description..."
      }
    }
);

export default {
  title: "components/{%name|kebabCase%}",
  argTypes,
  args
};

export const Story = (props) =><{%name|pascalCase%} {...props}>Content!</{%name|pascalCase%}>;
```
