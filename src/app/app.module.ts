import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './layout/system/layout.component';
import { AuthComponent } from './layout/auth/auth.component';
import { SidemenuModule } from './sidemenu/sidemenu.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/material.module';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidemenuModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    AuthService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
