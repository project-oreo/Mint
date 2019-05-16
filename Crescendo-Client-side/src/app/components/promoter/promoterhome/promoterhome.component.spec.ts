import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterhomeComponent } from './promoterhome.component';

describe('PromoterhomeComponent', () => {
  let component: PromoterhomeComponent;
  let fixture: ComponentFixture<PromoterhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
