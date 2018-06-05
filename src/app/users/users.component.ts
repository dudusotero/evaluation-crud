import { AuthService } from './../auth/auth.service';
import { IUsers } from './../interfaces/users.interface';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  users: Array<IUsers> = [];

  displayedColumns: Array<string> = ['name', 'email', 'actions'];
  dataSource: MatTableDataSource<IUsers>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: UsersService, private router: Router) { }

  ngAfterViewInit() {
    this.listAll();
  }

  listAll() {
    this.service.list().forEach((res: any) => {
      this.users = <IUsers[]>res.data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  newUser() {
    this.router.navigate(['app/users/detail']);
  }

  editUser(id: number) {
    this.router.navigate(['app/users/detail', id]);
  }

  deleteUser(id: number) {
    this.service.delete(id).subscribe(() => {
      this.removeByAttr(this.users, 'id', id);
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  removeByAttr(arr, attr, value) {
    let i = arr.length;
    while (i--) {
      if (arr[i]
        && arr[i].hasOwnProperty(attr)
        && (arguments.length > 2 && arr[i][attr] === value)) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }

  filterInList(filtroInput: string) {
    filtroInput = filtroInput.trim();
    filtroInput = filtroInput.toLowerCase();
    this.dataSource.filter = filtroInput;
  }

}
