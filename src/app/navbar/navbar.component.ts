import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private webService: WebService) {
    }

    user = null;

    ngOnInit() {
        this.webService.user.subscribe(user => {
            console.log(user);
            if (JSON.stringify(user) !== JSON.stringify({})) {
                this.user = user;
            } else {
                this.user = null;
            }
        });
    }

}
