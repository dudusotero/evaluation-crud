import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/system/layout.component';
import { AuthComponent } from './layout/auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

export const AppRoutes: Routes = [

  {
    path: '',
    redirectTo: 'app/users',
    pathMatch: 'full'
  },

  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      },
    ]
  },

  {
    path: '',
    component: AuthComponent,
    children: [{
      path: 'auth',
      loadChildren: './login/login.module#LoginModule'
    }]
  },

  { path: '**', redirectTo: 'app/users' }

];
