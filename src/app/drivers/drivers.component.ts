import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private webService: WebService) {
  }

  page = 2;
  drivers: any = [];

  ngOnInit() {
    if (sessionStorage.page) {
      this.page = sessionStorage.page;
    }
    this.webService.getDrivers(this.page);
  }

  nextPage() {
    this.page = Number(this.page) + 1;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }

  previousPage() {
    if (this.page > 1) {
      this.page = Number(this.page) - 1;
      sessionStorage.page = Number(this.page);
      this.webService.getDrivers(this.page);
    }
  }
}
