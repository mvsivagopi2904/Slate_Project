import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Closeaccount2Component } from './closeaccount2.component';

describe('Closeaccount2Component', () => {
  let component: Closeaccount2Component;
  let fixture: ComponentFixture<Closeaccount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Closeaccount2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Closeaccount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
