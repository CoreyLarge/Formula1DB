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

  page = 1;
  drivers: any = [];
  currentpage = this.page;

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

  page1() {
    this.page = 1;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page2() {
    this.page = 2;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page3() {
    this.page = 3;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page4() {
    this.page = 4;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page5() {
    this.page = 5;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page6() {
    this.page = 6;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page7() {
    this.page = 7;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page8() {
    this.page = 8;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page9() {
    this.page = 9;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
  page10() {
    this.page = 10;
    sessionStorage.page = Number(this.page);
    this.webService.getDrivers(this.page);
  }
}


