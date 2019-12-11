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

  drivers: any = [];

  ngOnInit() {
    this.webService.getDrivers();
  }
}
