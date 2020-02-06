import { Reducer } from 'redux';

const echo = <A>(arg: A): A => arg;

const retVal = echo(1);

const initialState = {
  notDank: true,
};

// Example of generics
// const dankReducer: Reducer<{ dank: boolean }> = (state = initialState, action) => {
//   return state;
// };
