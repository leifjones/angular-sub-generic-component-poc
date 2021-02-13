import { TruckRoute } from "./truck-route";
import { VerticalListItem } from "./vertical-list-item";

export class NotableEvent extends VerticalListItem {
    truckRoute: TruckRoute = null;
    time: Date = null;
    location: string = null;

    constructor(id: number, text: string, truckRoute: TruckRoute, time: Date, location: string) {
        super(id, text);
        // super(id, text, 'location');
        // super(id, text, 'time');
        // super(id, test, 'truckRouteName');
        this.truckRoute = truckRoute;
        this.time = time;
        this.location = location;
    }

    get truckRouteName(): string {
        return this.truckRoute.text;
    }
}