import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WebService} from './web.service';
import {HttpClientModule} from '@angular/common/http';
import {DriversComponent} from './drivers/drivers.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'drivers',
    component: DriversComponent
  },
  {
    path: 'drivers/:id',
    component: DriverComponent
  },
  {
    path: 'constructors',
    component: ConstructorComponent
  },
  {
    path: 'constructors/:id',
    component: TeamComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    HomeComponent,
    DriverComponent,
    NavbarComponent,
    ConstructorComponent,
    TeamComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
