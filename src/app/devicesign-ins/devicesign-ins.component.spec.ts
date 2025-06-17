import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesignInsComponent } from './devicesign-ins.component';

describe('DevicesignInsComponent', () => {
  let component: DevicesignInsComponent;
  let fixture: ComponentFixture<DevicesignInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicesignInsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesignInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
