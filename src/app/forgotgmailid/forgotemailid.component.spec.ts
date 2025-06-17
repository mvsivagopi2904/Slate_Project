import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotemailidComponent } from './forgotemailid.component';

describe('ForgotemailidComponent', () => {
  let component: ForgotemailidComponent;
  let fixture: ComponentFixture<ForgotemailidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotemailidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotemailidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
