import { MyList } from "./core/models/model.list";


export interface AppState{
    todo: MyList[];
    review: MyList[];
    done: MyList[];
}