My NPM user: https://www.npmjs.com/~joel.binnquist

Creating a distributable NG2 component
The following was done to create this distributable NPM module:

1. npm init
2. add dependencies to package.json (see the file); note usage of peerDependencies.
3. add tsconfig.json (see the file)
4. install typings
5. add .npmignore which excludes files that shall not be published
6. implement an NG2 component (src/hello.component.ts)
7. implement index.ts, which defines a NG2 module and exports it together with the component.

Publishing flow
---------------
1. Do some code update
2. Commit
3. Do `npm version [major|minor|patch]`
4. Do `npm publish`

References
----------
See
- https://docs.npmjs.com/getting-started/publishing-npm-packages
- https://docs.npmjs.com/misc/developers
- https://medium.com/@OCombe/how-to-publish-a-library-for-angular-2-on-npm-5f48cdabf435#.357l8ui38
- http://blog.angular-university.io/how-to-create-an-angular-2-library-and-how-to-consume-it-jspm-vs-webpack/
