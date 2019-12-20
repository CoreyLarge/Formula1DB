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

    page1() {
        this.page = Number(this.page = 1);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page2() {
        this.page = Number(this.page = 2);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page3() {
        this.page = Number(this.page = 3);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page4() {
        this.page = Number(this.page = 4);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page5() {
        this.page = Number(this.page = 5);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page6() {
        this.page = Number(this.page = 6);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page7() {
        this.page = Number(this.page = 7);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page8() {
        this.page = Number(this.page = 8);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page9() {
        this.page = Number(this.page = 9);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
    page10() {
        this.page = Number(this.page = 10);
        sessionStorage.page = Number(this.page);
        this.webService.getConstructors(this.page);
    }
}
