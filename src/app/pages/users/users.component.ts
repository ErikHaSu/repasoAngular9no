import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersRemote: any; 

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.usersRemote = this.dataService.getUsers();
  }

}
