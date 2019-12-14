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

  getDrivers(page) {
    return this.http.get(`http://127.0.0.1:5000/drivers?pn=` + page).subscribe(response => {
      this.pDrivers.next(response);
    });
  }

  getDriver(id) {
    return this.http.get(`http://127.0.0.1:5000/drivers/` + id).subscribe(response => {
      this.pDriver.next(response);
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
}
