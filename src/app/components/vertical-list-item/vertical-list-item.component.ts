import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-vertical-list-item',
  templateUrl: './vertical-list-item.component.html',
  styleUrls: ['./vertical-list-item.component.sass']
})
export class VerticalListItemComponent implements OnInit {

  @Input() id: number;
  @Input() text: string;
  @Input() toolTipText: string;
  @Input() isFirst: boolean;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  get class(): string {
    let result = 'lined';
    if(this.isFirst) {
      result = result + ' top';
    }
    if(this.toolTipText) {
      result = result + ' tooltip';
    }
    return result;
  }

}
