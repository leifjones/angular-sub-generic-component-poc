import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Driver } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private DRIVERS: Driver[] = [
    new Driver(101, "Billie", "cal-lme-mayb"),
    new Driver(102, "Daniel", "###-###-####"),
    new Driver(103, "Francine", "1-800-92-FranC"),
    new Driver(104, "Hugo", "555-8675-309")
  ];

  constructor() { }

  getDrivers(): Observable<Driver[]> {
    return of(this.DRIVERS);
  }
}
