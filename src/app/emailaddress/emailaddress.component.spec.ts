import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailaddressComponent } from './emailaddress.component';

describe('EmailaddressComponent', () => {
  let component: EmailaddressComponent;
  let fixture: ComponentFixture<EmailaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailaddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
