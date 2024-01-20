import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoActionComponent } from './todo-action/todo-action.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todoList', component: TodoListComponent },
  { path: 'todoAdd', component: TodoActionComponent },
  { path: 'todoEdit', component: TodoActionComponent },
  { path: 'todoDelete', component: TodoDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
