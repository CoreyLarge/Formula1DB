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

  constructor(private webService: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.reviewForm = formBuilder.group({
      name: ['', Validators.required],
      review: ['', Validators.required],
      rating: 5
    });
  }

  driver = null;
  races = null;
  reviews = null;

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.webService.getDriver(this.route.snapshot.params.id);
    this.webService.getRaces(this.route.snapshot.params.id);
    this.webService.getReviews(this.route.snapshot.params.id);
    this.webService.driver.subscribe(response => {
      this.driver = response;
      this.races = response;
    });
  }

  onSubmit() {
    this.webService.postReview(this.reviewForm.value);
    this.reviewForm.reset();
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

