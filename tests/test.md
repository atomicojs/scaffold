---
{ data: { name: "Upper Cod" } }
---

## next script

```js tests/build/<<name|kebabCase>>.js
const data = {"<<name|kebabCase>>":10};
const <<name|camelCase>> = 10;
const <<name|pascalCase>> = 10;
```

```css tests/build/<<name|kebabCase>>.css
:host {
  display: block;
}
```
