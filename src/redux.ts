// Thunks ✅
// Actions ✅
// Action Creators ✅
// Reducers ✅
// State ✅

import someFunc from './redux-js';

const someListOfStrings: string[] = ['a', 'b', 'c'];

interface State {
  inputField: string;
  taxField: string;
  totalCost: number;
}

const initialState: State = {
  inputField: '',
  taxField: '',
  totalCost: 0,
};

interface Action {
  type: 'SET_INPUT_FIELD' | 'SET_TAX_FIELD' | 'SET_TOTAL_COST' | '';
}

interface PayloadAction extends Action {
  [key: string]: any;
}

type ActionCreator = (...args: any[]) => PayloadAction;

type Dispatch = (action: Action) => void;

type GetState = () => State;

type Thunk = (...args: any[]) => (dispatch: Dispatch, getState: GetState) => any;

type Reducer = (state: State, action: PayloadAction) => State;

const SET_INPUT_FIELD = 'SET_INPUT_FIELD';
const SET_TAX_FIELD = 'SET_TAX_FIELD';
const SET_TOTAL_COST = 'SET_TOTAL_COST';

const setInputField: ActionCreator = (input: string) => ({
  type: SET_INPUT_FIELD,
  input,
});

const setTaxField: ActionCreator = (tax: string) => ({
  type: SET_TAX_FIELD,
  tax,
});

const setTotalCost: ActionCreator = () => ({
  type: SET_TOTAL_COST,
});

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT_FIELD:
      return {
        ...state,
        inputField: action.input,
      };
    case SET_TAX_FIELD:
      return {
        ...state,
        taxField: action.tax,
      };
    case SET_TOTAL_COST:
      return {
        ...state,
        totalCost: parseFloat(state.taxField) * parseFloat(state.inputField),
      };
    default:
      return state;
  }
};

class Store {
  private state: State;
  private reducer: Reducer;

  constructor(reducer: Reducer) {
    this.reducer = reducer;
    this.state = reducer(initialState, { type: '' });
  }

  public getState(): State {
    return this.state;
  };

  public dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
  };
}

const createStore = (reducer: Reducer): Store => {
  return new Store(reducer);
};

const store = createStore(reducer);

store.dispatch(setInputField('3.50'));
store.dispatch(setTaxField('1.0875'));
store.dispatch(setTotalCost());

console.log(store.getState());
