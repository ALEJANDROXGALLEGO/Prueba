import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MyList } from 'src/app/core/models/model.list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  todo: MyList[] = [];
  review: MyList[] = [];
  done: MyList[]= [];

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.select('todo').subscribe(item => this.todo = item);
    this.store.select('review').subscribe(item => this.review = item);
    this.store.select('done').subscribe(item => this.done = item);
    console.log(this.todo, this.review, this.done);
  }

  drop(event: CdkDragDrop<MyList[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer.data);
      transferArrayItem<MyList>(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  
}
