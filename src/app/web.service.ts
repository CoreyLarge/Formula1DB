import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {
  }

  private pDrivers = new Subject();
  public drivers = this.pDrivers.asObservable();

  getDrivers() {
    return this.http.get('http://127.0.0.1:5000/drivers').subscribe(response => {
      this.pDrivers.next(response);
    });
  }
}
