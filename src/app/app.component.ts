import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from './model/user';
import { Observable } from 'rxjs';
import { addUser, editUser, removeUser } from './store/actions/users.actions';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fb-root',
  template: `
    <form #f="ngForm" (ngSubmit)="saveUser(f)">
      <input type="text" [ngModel]="activeUser?.name" name="name" required>
      <input type="text" [ngModel]="activeUser?.age" name="age" required>
      <button type="submit" [disabled]="f.invalid" a>SAVE</button>
      <button type="button" (click)="reset( f )">RESET</button>
    </form>
    
    <li 
      *ngFor="let user of (users$ | async)"
      (click)="setActive(user)"
      [style.color]="user.id === activeUser?.id ? 'red' : null"
    >
      {{user.name}}
      <button (click)="deleteHandler(user, $event)">Del</button>
    </li>
  `,
})
export class AppComponent {
  users$: Observable<Array<User>> = this.store.pipe(select('users'));
  activeUser: User;

  constructor(private store: Store<any>) {

  }

  deleteHandler(user: User, event: MouseEvent) {
    event.stopPropagation();
    this.store.dispatch(removeUser({ id: user.id}));
    this.setActive(null);
  }

  saveUser(f: NgForm) {
    if (this.activeUser) {
      const user: User = {...this.activeUser, ...f.value}
      this.store.dispatch(editUser({ user }));
    } else {
      const user: User = f.value as User;
      this.store.dispatch(addUser({ user }));
      this.setActive(null);
      f.reset();
    }
  }

  setActive(user: User) {
    console.log('set active')
    this.activeUser = user;
  }

  reset(f: NgForm) {
    this.setActive(null);
    f.reset();
  }
}
