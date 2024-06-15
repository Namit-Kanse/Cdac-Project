import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRentFormComponent } from './user-rent-form.component';

describe('UserRentFormComponent', () => {
  let component: UserRentFormComponent;
  let fixture: ComponentFixture<UserRentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
