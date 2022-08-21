---
{
    tags: ["{%", "%}"],
    questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## root package

```yaml
# This workflow will run tests using node and then publish a package to GitHub Packages when a release is created
# For more information see: https://help.github.com/actions/language-and-framework-guides/publishing-nodejs-packages

name: Node.js Package
on:
    release:
        types: [created]
jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2
            # Setup .npmrc file to publish to npm
            - uses: actions/setup-node@v2
              with:
                  node-version: 18
                  registry-url: "https://registry.npmjs.org"
            - run: npm install
            - run: npm run components:publish
              env:
                  NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```