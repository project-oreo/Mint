import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsignupComponent } from './bandsignup.component';

describe('BandsignupComponent', () => {
  let component: BandsignupComponent;
  let fixture: ComponentFixture<BandsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
