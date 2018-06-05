import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../core/material.module';

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [LoginComponent]
})

export class LoginModule { }
