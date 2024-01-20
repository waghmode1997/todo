import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.scss']
})
export class TodoDeleteComponent {
  userId: number;
  constructor(private activatedRoute: ActivatedRoute,
    private todoService:TodoService,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.queryParams['id'];
  }

  deleteUser() {
    this.todoService.deleteRow(this.userId);
    this.router.navigate(['todoList']);
  }

  cancel() {
    this.router.navigate(['todoList']);
  }
}
