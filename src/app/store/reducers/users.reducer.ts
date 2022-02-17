import { createReducer, on } from '@ngrx/store';
import { User } from '../../model/user';
import { addUser, editUser, removeUser } from '../actions/users.actions';

export const initialState: User[] = [
  { id: 1, name: 'Mario', age: 25 },
  { id: 2, name: 'Tizio', age: 35 },
  { id: 3, name: 'Ciccio', age: 45 },
];

export const usersReducer = createReducer(
  initialState,
  on(addUser, (state, action) => [...state, {...action.user, id: Date.now()}]),
  on(removeUser, (state, action) => state.filter(item => item.id !== action.id)),
  on(editUser, (state, action) => state.map(item => {
    return item.id === action.user.id ? {...item, ...action.user} : item ;
  })),
);
