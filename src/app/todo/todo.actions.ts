import { createAction, props } from "@ngrx/store";

export const createTodo = createAction(
    '[TODO] Create Todo',
    props<{text:string}>()
);


export const createReview = createAction(
    '[TODO] Create Review',
    props<{text:string}>()
);


export const createDone = createAction(
    '[TODO] Create Done',
    props<{text:string}>()
);
