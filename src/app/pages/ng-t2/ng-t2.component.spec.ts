import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgT2Component } from './ng-t2.component';

describe('NgT2Component', () => {
  let component: NgT2Component;
  let fixture: ComponentFixture<NgT2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgT2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
