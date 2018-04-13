const createStore = (initialState, actionCreators, subscriber) => {
  let state = initialState;

  const dispatch = action => {
    state = action(state);

    subscriber(state, actions);
  };

  const actions = Object.keys(actionCreators).reduce((previous, current) => {
    previous[current] = (...args) => dispatch(actionCreators[current](...args));

    return previous;
  }, {});

  subscriber(state, actions);

  return actions;
};

export default createStore;
