import { VerticalListItem } from "./vertical-list-item";

export class TruckRoute extends VerticalListItem {
    startTime: string = null;
    endTime: string = null;

    constructor(id: number, text: string, startTime?: string, endTime?: string) {
        super(id, text);
        this.startTime = startTime ? startTime : null;
        this.endTime = endTime ? endTime : null;
    }
}