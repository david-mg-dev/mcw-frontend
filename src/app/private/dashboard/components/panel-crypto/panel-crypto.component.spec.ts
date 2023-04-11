import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCryptoComponent } from './panel-crypto.component';

describe('PanelCryptoComponent', () => {
  let component: PanelCryptoComponent;
  let fixture: ComponentFixture<PanelCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
