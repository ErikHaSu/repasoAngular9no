import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todosRemote: any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.todosRemote = this.dataService.getTodos()

  }

}
