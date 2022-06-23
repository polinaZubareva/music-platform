// create a makeStore function
import { createWrapper } from 'next-redux-wrapper';
import {
  AnyAction,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import { reducer, RootState } from './reducers';
import thunk, { ThunkDispatch } from 'redux-thunk';

const makeStore = () => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
