import createStore from '../src/createStore';

const initialState = {
  count: 0,
};

let subscriber;
let add;
let actionCreators;
let store;

beforeEach(() => {
  subscriber = jest.fn();
  add = jest.fn();
  actionCreators = {
    add: () => add,
  };
  store = createStore(initialState, actionCreators, subscriber);
});

test('returns object with one action per action creator', () => {
  for (const key in actionCreators) {
    expect(store[key]).toBeInstanceOf(Function);
  }
});

test('calls subscriber when store is created', () => {
  expect(subscriber).toHaveBeenCalledTimes(1);
});

test('calls subscriber when action is called', () => {
  store.add();

  expect(subscriber).toHaveBeenCalledTimes(2);
});

test('calls action creator method when action is called', () => {
  store.add();

  expect(add).toHaveBeenCalledTimes(1);
});

test('does not call action creator method before action is called', () => {
  expect(add).not.toHaveBeenCalled();
});

