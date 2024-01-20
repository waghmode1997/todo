import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoActionComponent } from './todo-action/todo-action.component';
import { SharedModule } from '../shared/shared.module';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoActionComponent,
    TodoDeleteComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ]
})
export class TodoModule { }
