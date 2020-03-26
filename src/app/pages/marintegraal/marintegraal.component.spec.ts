import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarintegraalComponent } from './marintegraal.component';

describe('MarintegraalComponent', () => {
  let component: MarintegraalComponent;
  let fixture: ComponentFixture<MarintegraalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarintegraalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarintegraalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
