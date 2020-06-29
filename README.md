
## Redux hooks demo w/TypeScript 

Simple code and demonstation of the transition from Redux `MapStateToProps` and `MapDispatchtoProps` to using `useSelector` and `useDispatcher` hooks.

The code is typed with TypeScript.

### Summary

The overall change from MapXToProps to using **built-in hooks** can be seen in the diff [c22c184...988ee06](https://github.com/tomfa/redux-hooks/compare/c22c184...988ee06)

The change from MapToProps to using **custom hooks** can be seen in the diff [1310a50...1c5d82f](https://github.com/tomfa/redux-hooks/compare/1310a50...1c5d82f)

- Type checking was preserved throughout the changes.

- Code size decreased when changing to built-in hooks.

- Code size was equal when changing to custom hooks (not reused).

- Component with hooks [will rerender when parent rerenders, unlike with MapXToProps](https://react-redux.js.org/api/hooks#performance). However, this can easily be fixed with `React.useMemo` wrapping the component.

Overall, I do not see good reasons to keep using MapXToProps. Hooks seem more consise and readable.

### Examples

- [f553913](https://github.com/tomfa/graphy/commit/f553913) - Add a Redux store (Chat).
- [1310a50](https://github.com/tomfa/graphy/commit/1310a50) - Replace mapStateToProps with useSelector.
- [988ee06](https://github.com/tomfa/graphy/commit/988ee06) - Replace mapStateToProps/mapDispatchToProps with useSelector/useDispatch.
- [1c5d82f](https://github.com/tomfa/graphy/commit/1c5d82f) - Convert useSelector and useDispatch to custom hooks.

## Develop

#### Install

```
yarn
```

#### Run
```
yarn start
```

### Typescript checking
```
yarn compile
```


## Related reading
- [Notes for this repo](http://notes.webutvikling.org/redux-hooks/)
- [React-Redux: Hooks](https://react-redux.js.org/api/hooks)
