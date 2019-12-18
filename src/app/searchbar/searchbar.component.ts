import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {WebService} from '../web.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private webService: WebService, private router: Router) {
    }

    search;

    ngOnInit() {
        this.search = this.formBuilder.group({
            search: ''
        });
    }

    query() {
        if (this.search.valid) {
            console.log(this.search);
            this.router.navigate(['/drivers/search/', this.search.value.search]).then(() => {
                this.webService.getDrivers(this.search.value.search, 1);
            });
        }
    }

}
