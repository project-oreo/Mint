import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterresolveComponent } from './promoterresolve.component';

describe('PromoterresolveComponent', () => {
  let component: PromoterresolveComponent;
  let fixture: ComponentFixture<PromoterresolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterresolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterresolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
