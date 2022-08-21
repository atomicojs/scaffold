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

## Component documentation

````markdown {%name|kebabCase%}/README.mdx
import { Story } from "@storybook/addon-docs";

## {%name|kebabCase%}

<Story id="components-{%name|kebabCase%}--story"/>

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

## Component story

```jsx {%name|kebabCase%}/{%name|kebabCase%}.stories.tsx
import { {%name|pascalCase%} } from "./{%name|kebabCase%}";
import README from "./README.mdx";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/{%name|kebabCase%}",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    color: { control: "color" },
    width: {
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      page: README,
    },
  },
};

export const Story = (props) =><{%name|pascalCase%} {...props}>Content!</{%name|pascalCase%}>;

Story.args = {
  color: "black",
};
```
