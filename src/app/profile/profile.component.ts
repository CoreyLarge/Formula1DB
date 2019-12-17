import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private webService: WebService, private formBuilder: FormBuilder) {
    }

    user;
    favourites;

    ngOnInit() {
        this.webService.user.subscribe(user => {
            this.user = user;
        });

        this.webService.getFavourites(favourite => {
            this.favourites = favourite
        });
    }

}
