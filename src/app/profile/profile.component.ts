import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private webService: WebService, private formBuilder: FormBuilder, private router: Router) {
    }

    user;
    favourites;

    ngOnInit() {
        this.webService.user.subscribe(user => {
            if (JSON.stringify(user) !== JSON.stringify({})) {
                this.user = user;
            } else {
                this.router.navigate(['/']);
            }
        });

        this.webService.getFavourites(favourite => {
            this.favourites = favourite;
        });
    }

}
