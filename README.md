## @atomico/scaffold

CLI that generates files from markdown documents

### Install

```bash
npm i @atomico/scaffold
```

## use from package.json#scripts

Add script to package.json

```json
{
  "scripts": {
    "create-component": "scaff template/component-jsx src"
  }
}
```

## use from npx

```bash
scaff template/component-jsx src
```

## Markdown

The files are created according to the markdown file associated with the CLI, all the code blocks that declare the path will be created only if the document does not exist, example:

````md
---
{
  data: { name: "Upper Cod" },
  questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## bla bla..

```js tests/build/<<name|kebabCase>>.js
const data = {"<<name|kebabCase>>":10};
const <<name|camelCase>> = 10;
const <<name|pascalCase>> = 10;
```

Bla bla..

```css tests/build/<<name|kebabCase>>.css
:host {
  display: block;
}
```
````
