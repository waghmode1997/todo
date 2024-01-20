import {Component} from '@angular/core';
import { PeriodicElement } from '../index';;
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  elementData: PeriodicElement[];
   displayedColumns: string[] = ['index', 'firstname', 'lastname', 'email', 'phonenumber', 'action'];
  dataSource: any;

  constructor(private router: Router,
    private todoService:TodoService) {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.elementData);
  }


  ngOnInit(): void {
    this.getUserDetails();
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.elementData);
  }

  getUserDetails() {
    this.todoService.data$.subscribe(data => {
      this.elementData = data;
    });
  }

  addUser(value: string) {
    this.router.navigate(['todoAdd'], { queryParams: { status: value } })
  }

  onEdit(element: PeriodicElement, index: any) {
    const jsonString = JSON.stringify(element);
    localStorage.setItem('user', jsonString);
    this.router.navigate(['todoEdit'], { queryParams: { id: index } })
  }

  onDelete(index: any) {
    this.router.navigate(['todoDelete'], { queryParams: { id: index } })
  }
}
