import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngc2Component } from './ngc2.component';

describe('Ngc2Component', () => {
  let component: Ngc2Component;
  let fixture: ComponentFixture<Ngc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngc2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
