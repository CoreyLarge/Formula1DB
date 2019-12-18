import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    constructor(private webService: WebService, private route: ActivatedRoute) {
    }

    team = null;

    ngOnInit() {
        console.log(this.route.snapshot.params.id);
        this.webService.getConstructor(this.route.snapshot.params.id);
        this.webService.constructorsId.subscribe(response => {
            this.team = response;
        });
    }

}
