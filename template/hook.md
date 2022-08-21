---
{
    tags: ["{%", "%}"],
    questions:
        [
            {
                type: "text",
                name: "name",
                message: "hook name? (without the prefix use)",
            },
        ],
}
---

## custom hook

```jsx use{%name|pascalCase%}/use{%name|pascalCase%}.ts
import { useState } from "atomico";

/**
 * Custom hook counter
 */
export function use{%name|pascalCase%}(initValue: number) {
  const [value, setValue] = useState(initValue);

  const increment = ()=>setValue(value+1);

  const decrement = ()=>setValue(value-1);

  return { value, increment, decrement};
}
```

## Documentation

````markdown use{%name|pascalCase%}/README.md
# use{%name|pascalCase%}

## module

```js
import { use{%name|pascalCase%} } from "./use{%name|pascalCase%}";
```

## usage

```tsx
import { use{%name|pascalCase%} } from "./use{%name|pascalCase%}";

function myComponent(){
    const counter =  use{%name|pascalCase%}(0);
    return (
        <host>
            <button onclick={counter.decrement}>decrement</button>
            <strong>{counter.value}</strong>
            <button onclick={counter.increment}>increment</button>
        </host>
    );
}
```
````

## test

```jsx use{%name|pascalCase%}/use{%name|pascalCase%}.test.ts
import { describe, it, expect } from "vitest";
import { createHooks } from "atomico/test-hooks";
import { use{%name|pascalCase%} } from "./use{%name|pascalCase%}";

describe("{%name|pascalCase%}", () => {
  it("return", () => {
    const host = {};
    const requestUpdate = ()=>{};

    const hooks = createHooks(requestUpdate, host);

    const result = hooks.load(()=>use{%name|pascalCase%}(0));

    expect(result.value).toEqual(0);
  });
});
```
