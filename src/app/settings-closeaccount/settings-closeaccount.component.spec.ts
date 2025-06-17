import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCloseaccountComponent } from './settings-closeaccount.component';

describe('SettingsCloseaccountComponent', () => {
  let component: SettingsCloseaccountComponent;
  let fixture: ComponentFixture<SettingsCloseaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsCloseaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsCloseaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
