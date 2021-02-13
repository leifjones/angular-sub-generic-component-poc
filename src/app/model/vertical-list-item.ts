export class VerticalListItem {
    id: number = null;
    text: string = null;
    toolTipParameter?: string = null;

    get toolTipText(): string | null {
        if (!this.toolTipParameter) {
            return null;
        }
        return this[this.toolTipParameter];
    }

    constructor(id: number, text: string, toolTipParameter?: string, toolTipText?: string) {
        this.id = id;
        this.text = text;
        this.toolTipParameter = toolTipParameter ? toolTipParameter : null;
    }
}