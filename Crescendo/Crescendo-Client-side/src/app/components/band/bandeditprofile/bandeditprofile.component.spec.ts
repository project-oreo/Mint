import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeditprofileComponent } from './bandeditprofile.component';

describe('BandeditprofileComponent', () => {
  let component: BandeditprofileComponent;
  let fixture: ComponentFixture<BandeditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
