import { VerticalListItem } from "./vertical-list-item";

export class Driver extends VerticalListItem {
    phoneNumber: string;

    constructor(id: number, text: string, phoneNumber?: string) {
        super(id, text, 'phoneNumber');
        this.phoneNumber = phoneNumber;
    }
}