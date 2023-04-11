import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSellComponent } from './card-sell.component';

describe('CardSellComponent', () => {
  let component: CardSellComponent;
  let fixture: ComponentFixture<CardSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
