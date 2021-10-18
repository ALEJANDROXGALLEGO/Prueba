import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import {
  CdkDragEnter,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { HomeComponent } from './home.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponent } from '@angular/compiler/src/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterTestingModule,
        DragDropModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set 😜 on click', () => {
  //   spyOn(component, "drop")
  //   component.todo = ['1', '2', '3'];
  //   component.review= ['4', '5', '6'];
  //   component.done = ['7', '8', '9'];
  //   let el = fixture.debugElement.query(By.css('#todo'))
  //   el.triggerEventHandler('click', null);
  //   //debugEle[0].triggerEventHandler('mousedown',{pageX:50, pageY: 40});
  //   el.triggerEventHandler('click', {});
  //   expect(component.drop).toHaveBeenCalled();
  // });



  // it('should be able to start auto scrolling with a drag boundary', fakeAsync(() => {
  //   fixture.componentInstance.boundarySelector = '.drop-list';
  //   const item = fixture.componentInstance.dragItems.first.element.nativeElement;
  //   const list = fixture.componentInstance.dropInstance.element.nativeElement;
  //   const listRect = list.getBoundingClientRect();
  //   expect(list.scrollLeft).toBe(0);
  //   startDraggingViaMouse(fixture, item);
  //   dispatchMouseEvent(document, 'mousemove', listRect.left + listRect.width,
  //     listRect.top + listRect.height / 2);
  //   tickAnimationFrames(20);

  //   expect(list.scrollLeft).toBeGreaterThan(0);
  // }));
  
});


