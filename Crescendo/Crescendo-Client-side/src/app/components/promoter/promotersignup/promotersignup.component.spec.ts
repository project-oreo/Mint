import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersignupComponent } from './promotersignup.component';

describe('PromotersignupComponent', () => {
  let component: PromotersignupComponent;
  let fixture: ComponentFixture<PromotersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
