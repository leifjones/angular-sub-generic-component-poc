import { Component, Input, OnInit } from '@angular/core';
import { VerticalListItem } from 'src/app/model';

@Component({
  selector: 'app-vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.sass']
})
export class VerticalListComponent implements OnInit {

  @Input() heading: string;
  @Input() items: VerticalListItem;

  constructor() { }

  ngOnInit(): void {
  }

}
