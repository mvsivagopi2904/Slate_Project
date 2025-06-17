import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAuthorizedwebsitesComponent } from './settings-authorizedwebsites.component';

describe('SettingsAuthorizedwebsitesComponent', () => {
  let component: SettingsAuthorizedwebsitesComponent;
  let fixture: ComponentFixture<SettingsAuthorizedwebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsAuthorizedwebsitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsAuthorizedwebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
