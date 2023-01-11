# DEV_README

Checkout from `review` branch. `master` is considered production branch and should not be touched.

- source files are in `/src`
- test files are in `/test`
- `index.html` can be used to check your changes, but feel free to create your own `.html` files

## Install Dev Dependencies
```
$ npm install
```

## Build
builds `md-page.js` at project root.

(DO NOT SUBMIT THE BUILT FILE, REMOVE IT BEFORE OPENING PR)
```
$ npm run build
```

## Run Tests
At the moment, tests focus only on the build artifact. Thus, run `npm run build` before running any test.

```
$ npm test
```

## Opening PR

Only submit your PR to the `review` branch. Once it is approved and merged, your changes will be automatically applied to the `master` branch.
