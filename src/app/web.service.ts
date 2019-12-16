import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {
  }

  private pDrivers = new Subject();
  public drivers = this.pDrivers.asObservable();
  private pDriver = new Subject();
  public driver = this.pDriver.asObservable();
  private pConstructor = new Subject();
  public constructors = this.pConstructor.asObservable();
  private pConstructors = new Subject();
  public constructorsId = this.pConstructors.asObservable();
  private raceinfo = new Subject();
  public races = this.raceinfo.asObservable();
  private reviews = new Subject();
  public userreviews = this.reviews.asObservable();
  private logintoken = new Subject();
  public token = this.logintoken.asObservable();

  driverID;

  getDrivers(page) {
    return this.http.get(`http://127.0.0.1:5000/drivers?pn=` + page).subscribe(response => {
      this.pDrivers.next(response);
    });
  }

  getDriver(id) {
    return this.http.get(`http://127.0.0.1:5000/drivers/` + id).subscribe(response => {
      this.pDriver.next(response);
      this.driverID = id;
    });
  }

  getConstructors(page) {
    return this.http.get(`http://127.0.0.1:5000/constructors?pn=` + page).subscribe(response => {
      this.pConstructor.next(response);
    });
  }

  getConstructor(id) {
    return this.http.get(`http://127.0.0.1:5000/constructors/` + id).subscribe(response => {
      this.pConstructors.next(response);
    });
  }

  getRaces(id) {
    return this.http.get(`http://127.0.0.1:5000/drivers/` + id + `/races/wins`).subscribe(response => {
      this.raceinfo.next(response);
    });
  }

  getReviews(id) {
    return this.http.get(`http://127.0.0.1:5000/drivers/` + id + `/reviews`).subscribe(response => {
      this.reviews.next(response);
    });
  }

  login() {
    return this.http.get(`http://127.0.0.1:5000/login`).subscribe(response => {
      this.logintoken.next(response);
    });
  }

  postReview(review) {
    const postData = new FormData();
    postData.append('name', review.name);
    postData.append('review', review.review);
    postData.append('rating', review.rating);

    const today = new Date();
    const todayDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    postData.append('date', todayDate);

    // @ts-ignore
    return this.http.post(`http://127.0.0.1:5000/drivers/` + this.driverID + `/reviews`, postData).subscribe(response => {
      this.getReviews(this.driverID);
    });
  }
}
