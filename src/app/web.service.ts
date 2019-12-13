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
}
