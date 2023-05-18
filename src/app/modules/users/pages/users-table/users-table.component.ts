import { Component, OnInit } from '@angular/core';
import { DataSourceUser } from './data-source';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: []
})
export class UsersTableComponent implements OnInit {
    dataSource = new DataSourceUser();
    columns: string[] = ['id', 'avatar', 'name', 'email'];

    constructor(
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.usersService.getUsers().subscribe(users => {
            this.dataSource.init(users);
        });
    }
}
