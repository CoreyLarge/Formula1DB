import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {

  constructor(private webService: WebService) {
  }

  page = 1;
  constructors: any = [];

  ngOnInit() {
    if (sessionStorage.page) {
      this.page = sessionStorage.page;
    }
    this.webService.getConstructors(this.page);
  }

  nextPage() {
    this.page = Number(this.page) + 1;
    sessionStorage.page = Number(this.page);
    this.webService.getConstructors(this.page);
  }

  previousPage() {
    if (this.page > 1) {
      this.page = Number(this.page) - 1;
      sessionStorage.page = Number(this.page);
      this.webService.getConstructors(this.page);
    }
  }
}
