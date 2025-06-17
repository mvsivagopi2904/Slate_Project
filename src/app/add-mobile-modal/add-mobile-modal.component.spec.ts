import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobileModalComponent } from './add-mobile-modal.component';

describe('AddMobileModalComponent', () => {
  let component: AddMobileModalComponent;
  let fixture: ComponentFixture<AddMobileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMobileModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMobileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
