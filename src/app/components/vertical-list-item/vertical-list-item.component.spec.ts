import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalListItemComponent } from './vertical-list-item.component';

describe('VerticalListItemComponent', () => {
  let component: VerticalListItemComponent;
  let fixture: ComponentFixture<VerticalListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
