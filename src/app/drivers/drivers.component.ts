import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

    searchForm;

    constructor(private webService: WebService, private formBuilder: FormBuilder) {
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

    onSubmitSearch() {
        this.webService.postSearch(this.searchForm.value);
        this.searchForm.reset();
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

    gotopage(page) {
        this.page = page;
        sessionStorage.page = Number(this.page);
        this.webService.getDrivers(this.page);
    }

    isInvalid(control) {
        return this.searchForm.controls[control].invalid && this.searchForm.controls[control].touched;
    }
}


