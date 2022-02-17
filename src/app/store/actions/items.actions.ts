import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
  '[Items] add',
  props<{ value: string}>()
);


export const removeItem = createAction(
  '[Items] remove',
  props<{ value: string}>()
);
