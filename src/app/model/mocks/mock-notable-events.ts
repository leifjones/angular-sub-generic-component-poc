import { NotableEvent } from "../notable-event";
import { TRUCK_ROUTES } from "./mock-truck-routes";

export const NOTABLE_EVENTS: NotableEvent[] = [
    new NotableEvent(1, 'Christmas Lights', TRUCK_ROUTES[0], new Date('2021-02-08T08:00:00Z'), 'here'),
    new NotableEvent(2, 'Dog unleashed', TRUCK_ROUTES[0], new Date('2021-02-08T08:00:00Z'), 'there')
];