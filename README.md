# Stata [![Travis](https://img.shields.io/travis/developerdizzle/stata.svg)](https://travis-ci.org/developerdizzle/stata) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/stata.svg)](https://bundlephobia.com/result?p=stata)

Super simple state management

https://www.npmjs.com/package/stata

## What this does

- Creates a store of state based on an initial state
- Automatically binds action creators into action methods, which are returned as an object
- Automatically dispatches and calls render function (with current state and actions) when action methods are called

## What this doesn't do

Strong emphasis on YAGNI

- Allow multiple subscribers
- Allow unsubscribe
- Dynamically add actions
- Expose `dispatch`
- Serializable actions or action history

## How to use

Check out this [codepen](https://codepen.io/dizzle/pen/BrgJqj) that uses [preact](https://github.com/developit/preact) as the rendering engine.