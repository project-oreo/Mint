import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandloginComponent } from './bandlogin.component';

describe('BandloginComponent', () => {
  let component: BandloginComponent;
  let fixture: ComponentFixture<BandloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
