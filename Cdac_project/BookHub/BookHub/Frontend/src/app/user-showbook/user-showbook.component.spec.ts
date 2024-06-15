import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowbookComponent } from './user-showbook.component';

describe('UserShowbookComponent', () => {
  let component: UserShowbookComponent;
  let fixture: ComponentFixture<UserShowbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShowbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
