import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDropdownComponent } from './popover-dropdown.component';

describe('PopoverDropdownComponent', () => {
  let component: PopoverDropdownComponent;
  let fixture: ComponentFixture<PopoverDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
