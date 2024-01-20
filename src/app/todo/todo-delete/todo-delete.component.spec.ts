import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteComponent } from './todo-delete.component';

describe('TodoDeleteComponent', () => {
  let component: TodoDeleteComponent;
  let fixture: ComponentFixture<TodoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDeleteComponent]
    });
    fixture = TestBed.createComponent(TodoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
