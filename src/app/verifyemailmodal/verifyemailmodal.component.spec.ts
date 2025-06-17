import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyemailmodalComponent } from './verifyemailmodal.component';

describe('VerifyemailmodalComponent', () => {
  let component: VerifyemailmodalComponent;
  let fixture: ComponentFixture<VerifyemailmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyemailmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyemailmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
