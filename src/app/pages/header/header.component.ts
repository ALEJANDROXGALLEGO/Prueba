import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { createTodo } from 'src/app/todo/todo.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  textInput: FormControl;
  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', Validators.required);
  }

  addTodo() {
    if (this.textInput.valid) {
      this.store.dispatch(createTodo({text: this.textInput.value}));
      this.textInput.setValue('');
    }
  }
}
