import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableEventListItemComponent } from './notable-event-list-item.component';

describe('NotableEventListItemComponent', () => {
  let component: NotableEventListItemComponent;
  let fixture: ComponentFixture<NotableEventListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotableEventListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotableEventListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
