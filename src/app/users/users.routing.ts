import { RoleGuard } from './../auth/role.guard';
import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { DetailComponent } from './detail/detail.component';

export const UsersRoutes: Routes = [

  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'detail',
    component: DetailComponent,
    canActivate: [RoleGuard]
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [RoleGuard]
  }

];
