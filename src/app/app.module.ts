import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WebService} from './web.service';
import {HttpClientModule} from '@angular/common/http';
import {DriversComponent} from './drivers/drivers.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'drivers',
    component: DriversComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
