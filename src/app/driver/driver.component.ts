import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-driver',
    templateUrl: './driver.component.html',
    styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

    reviewForm;
    editReview;
    showEdit = false;
    editreviewid = null;

    constructor(private webService: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
        this.reviewForm = formBuilder.group({
            name: ['', Validators.required],
            review: ['', Validators.required],
            rating: 5
        });
        this.editReview = formBuilder.group({
            editname: ['', Validators.required],
            editreview: ['', Validators.required],
            editrating: 5
        });
    }

    editreviewval = false;
    driver = null;
    races = null;
    wins = null;
    reviews = null;
    loggedin;

    ngOnInit() {
        console.log(this.route.snapshot.params.id);
        this.webService.getDriver(this.route.snapshot.params.id);
        this.webService.getRaces(this.route.snapshot.params.id);
        this.webService.getReviews(this.route.snapshot.params.id);
        this.webService.races.subscribe(response => {
            console.log(response);
            this.wins = response;
        });
        this.webService.driver.subscribe(response => {
            this.driver = response;

        });
        this.webService.user.subscribe(user => {
            this.loggedin = (JSON.stringify(user) !== JSON.stringify({}));
        });
    }

    onSubmit() {
        console.log(this.reviewForm.value);
        this.webService.postReview(this.reviewForm.value);
        this.reviewForm.reset();
    }

    onEdit() {
        console.log(this.editReview.value)
        this.webService.editReview(this.editReview.value, this.editreviewid);
        this.showEdit = false;


    }

    isInvalid(control) {
        return this.reviewForm.controls[control].invalid && this.reviewForm.controls[control].touched;
    }

    isUnTouched() {
        return this.reviewForm.controls.name.pristine ||
            this.reviewForm.controls.review.pristine;
    }

    isIncomplete() {
        return this.isInvalid('name') ||
            this.isInvalid('review') ||
            this.isUnTouched();
    }
}

