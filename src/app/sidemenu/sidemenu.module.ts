import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    BrowserModule
  ],
  declarations: [
    SidemenuComponent
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SidemenuModule { }
