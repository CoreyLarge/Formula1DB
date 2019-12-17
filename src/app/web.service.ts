import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class WebService {
    constructor(private http: HttpClient) {
    }

    private url = `http://127.0.0.1:5000`;

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

    private usertoken = new BehaviorSubject({});
    public user = this.usertoken.asObservable();

    private fav = new BehaviorSubject([]);
    public favdriver = this.fav.asObservable();

    private reg = new BehaviorSubject({});


    driverID;

    getDrivers(page) {
        return this.http.get(`${this.url}/drivers?pn=` + page).subscribe(response => {
            this.pDrivers.next(response);
        });
    }

    getDriver(id) {
        return this.http.get(`${this.url}/drivers/` + id).subscribe(response => {
            this.pDriver.next(response);
            this.driverID = id;
        });
    }

    getConstructors(page) {
        return this.http.get(`${this.url}/constructors?pn=` + page).subscribe(response => {
            this.pConstructor.next(response);
        });
    }

    getConstructor(id) {
        return this.http.get(`${this.url}/constructors/` + id).subscribe(response => {
            this.pConstructors.next(response);
        });
    }

    getRaces(id) {
        return this.http.get(`${this.url}/drivers/` + id + `/races/wins`).subscribe(response => {
            this.raceinfo.next(response);
        });
    }

    getReviews(id) {
        return this.http.get(`${this.url}/drivers/` + id + `/reviews`).subscribe(response => {
            this.reviews.next(response);
        });
    }

    register(register){
        const{name, email, username, password} = register;
        const rdata = new FormData();
        rdata.append('name', name);
        rdata.append('email', email);
        rdata.append('username', email);
        rdata.append('password', password);
        return this.http.post(`${this.url}/register`, rdata).toPromise().then(response =>{
            this.login({username, password});
        });
    }

    login(login) {
        const {username, password} = login;
        const data = new FormData();
        data.append('username', username);
        data.append('password', password);
        return this.http.post(`${this.url}/login`, data).subscribe(response => {
            this.usertoken.next(response);
        });
    }

    logout() {
        // @ts-ignore
        const t = this.usertoken.getValue().token;
        if (t) {
            const headers = {
                headers: new HttpHeaders({'x-access-token': t})
            };
            return this.http.get(`${this.url}/logout`, headers).subscribe(response => {
                this.usertoken.next({});
            });
        }

    }

    postReview(review) {
        const postData = new FormData();
        postData.append('name', review.name);
        postData.append('review', review.review);
        postData.append('rating', review.rating);

        const today = new Date();
        const todayDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
        postData.append('date', todayDate);

        return this.http.post(`${this.url}/drivers/` + this.driverID + `/reviews`, postData).subscribe(response => {
            this.getReviews(this.driverID);
        });
    }

    postSearch(search) {
        const searchData = new FormData();
        searchData.append('name', search.name);
    }

    addFavourite() {
        // @ts-ignore
        const t = this.usertoken.getValue().token;
        if (t) {
            const headers = {
                headers: new HttpHeaders({'x-access-token': t})
            };
            return this.http.post(`${this.url}/drivers/${this.driverID}/favourites`, null, headers).subscribe(response => {
                // @ts-ignore
                this.fav.next(response);
            });
        }
    }

    getFavourites() {
        return this.http.get(`${this.url}/favourites`).subscribe(response => {
            // @ts-ignore
            this.fav.next(response);
        });
    }

    deleteFavourites(id) {
        return this.http.delete(`${this.url}/favourites/${id}`).subscribe(response => {
            // @ts-ignore
            this.fav.next(response);
        });
    }

}
