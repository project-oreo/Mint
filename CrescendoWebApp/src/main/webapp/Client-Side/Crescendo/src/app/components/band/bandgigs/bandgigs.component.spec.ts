import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandgigsComponent } from './bandgigs.component';

describe('BandgigsComponent', () => {
  let component: BandgigsComponent;
  let fixture: ComponentFixture<BandgigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandgigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandgigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
