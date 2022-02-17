import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem } from '../actions/items.actions';

export const initialState = ['osx', 'linux', 'windows'];

export const itemsReducer = createReducer(
  initialState,
  on(addItem, (state, action) => [...state, action.value]),
  on(removeItem, (state, action) => state.filter(item => item !== action.value) ),
);
