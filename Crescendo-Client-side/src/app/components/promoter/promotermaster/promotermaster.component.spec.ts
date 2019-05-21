import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotermasterComponent } from './promotermaster.component';

describe('PromotermasterComponent', () => {
  let component: PromotermasterComponent;
  let fixture: ComponentFixture<PromotermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
