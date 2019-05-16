import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandhomeComponent } from './bandhome.component';

describe('BandhomeComponent', () => {
  let component: BandhomeComponent;
  let fixture: ComponentFixture<BandhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
