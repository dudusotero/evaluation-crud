import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutes } from './users.routing';
import { MaterialModule } from '../core/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UsersRoutes)
  ],
  declarations: [UsersComponent, DetailComponent]
})

export class UsersModule { }
