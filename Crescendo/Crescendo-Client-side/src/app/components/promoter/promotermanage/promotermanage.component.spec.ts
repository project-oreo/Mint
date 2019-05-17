import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotermanageComponent } from './promotermanage.component';

describe('PromotermanageComponent', () => {
  let component: PromotermanageComponent;
  let fixture: ComponentFixture<PromotermanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotermanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotermanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
