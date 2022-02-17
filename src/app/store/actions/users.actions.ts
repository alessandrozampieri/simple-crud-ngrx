import { createAction, props } from '@ngrx/store';
import { User } from '../../model/user';

export const addUser = createAction(
  '[User] add',
  props<{ user: User}>()
);

export const removeUser = createAction(
  '[User] remove',
  props<{ id: number}>()
);

export const editUser = createAction(
  '[User] edit',
  props<{ user: User}>()
);
