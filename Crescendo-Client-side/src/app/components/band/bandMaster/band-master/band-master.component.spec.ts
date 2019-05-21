import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandMasterComponent } from './band-master.component';

describe('BandMasterComponent', () => {
  let component: BandMasterComponent;
  let fixture: ComponentFixture<BandMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
