import { createReducer, on } from '@ngrx/store';
import { MyList } from '../core/models/model.list';
import { createDone, createReview, createTodo } from './todo.actions';

export const stateInitial: MyList[] = [];

const _todoReducer = createReducer(stateInitial,
    on(createTodo, (state, { text }) => [...state, new MyList(text)]),
    on(createReview, (state, { text }) => [...state, new MyList(text)]),
    on(createDone, (state, { text }) => [...state, new MyList(text)])
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}