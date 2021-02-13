import { Component, OnInit } from '@angular/core';

import { Driver, NotableEvent, TruckRoute } from './model';
import { NOTABLE_EVENTS, TRUCK_ROUTES } from './model/mocks';
import { DriverService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  drivers: Driver[];
  constructor(private driverService: DriverService) {
  }

  title: string = 'Angular Generic Sub Component Example';
  notableEvents: NotableEvent[] = NOTABLE_EVENTS;
  truckRoutes: TruckRoute[] = TRUCK_ROUTES;
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.driverService.getDrivers().subscribe((items) => this.drivers = items);
    
  }
}
