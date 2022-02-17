import { createReducer, on } from '@ngrx/store';
import { cleanProfile, updateProfile } from '../actions/profile.actions';

export const profileReducer = createReducer(
  'Mario Rossi',
  on(cleanProfile, () => ''),
  on(updateProfile, (state, action) => action.value)
);
