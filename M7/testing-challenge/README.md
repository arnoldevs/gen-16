### Dependecies used

| Package           | Version |
| ----------------- | ------- |
| vue-router        | 4.5.0   |
| vuex              | 4.0.2   |
| vite              | 6.0.1   |
| vue               | 3.5.13  |
| jest              | 29.7.0  |
| @vue/vue3-jest    | 29.2.6  |
| @babel/preset-env | 7.26.0  |
| @vue/test-utils   | 2.4.6   |

## Project Setup

```sh
cd testing-challenge
```

```sh
npm install
```

### Hot-Reload for Development

```sh
npm run dev
```

## Run tests

```sh
npm run test:unit
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

> **See the [testing-challenge](https://testing-challenge-dl.web.app/) deployed on firebase**

## References

- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Jest](https://jestjs.io/)
- [Vuex](https://vuex.vuejs.org/)
