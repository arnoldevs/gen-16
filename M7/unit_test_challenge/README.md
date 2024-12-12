### Dependecies used

| Package                   | Version        |
| ------------------------- | -------------- |
| @vue/cli-plugin-babel     | 5.0.0          |
| @vue/cli-plugin-router    | 5.0.0          |
| @vue/cli-plugin-unit-jest | 5.0.0          |
| @vue/cli-service          | 5.0.0          |
| @vue/test-utils           | 2.0.0-0        |
| @vue/vue3-jest            | 27.0.0-alpha.1 |
| babel-jest                | 27.0.6         |
| core-js                   | 3.8.3          |
| jest                      | 27.0.5         |
| vue                       | 3.2.13         |
| vue-router                | 4.0.3          |

## Project Setup

```sh
cd unit_test_challenge
```

```sh
npm install
```

### Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production (optional)

```sh
npm run build
```

### Issues

> Sometimes, the node_modules directory can become corrupted. Deleting and reinstalling the dependencies can resolve this issue:

Run

```sh
npm cache clean --force && npm install
```

Or

```sh
npm install vite
```

Or

```sh
rm -rf package-lock.json && npm install
```

## Notes

> The project is still in development, so the code is not optimized for production.

## References

- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue Test Utils](https://vue-test-utils.vuejs.org/)
- [Jest](https://jestjs.io/)
