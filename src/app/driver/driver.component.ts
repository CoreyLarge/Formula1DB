import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private webService: WebService, private route: ActivatedRoute) {
  }

  driver = null;

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.webService.getDriver(this.route.snapshot.params.id);
    this.webService.driver.subscribe(response => {
      this.driver = response;
    });
  }
}
