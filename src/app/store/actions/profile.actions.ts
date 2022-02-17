import { createAction, props } from '@ngrx/store';

export const cleanProfile = createAction('[Profile] clean profile');

export const updateProfile = createAction(
  '[Profile] update profile',
  props<{ value: string }>()
);
