import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLinkedaccountComponent } from './settings-linkedaccount.component';

describe('SettingsLinkedaccountComponent', () => {
  let component: SettingsLinkedaccountComponent;
  let fixture: ComponentFixture<SettingsLinkedaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsLinkedaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsLinkedaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
