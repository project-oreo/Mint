import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterendorseComponent } from './promoterendorse.component';

describe('PromoterendorseComponent', () => {
  let component: PromoterendorseComponent;
  let fixture: ComponentFixture<PromoterendorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterendorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterendorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
