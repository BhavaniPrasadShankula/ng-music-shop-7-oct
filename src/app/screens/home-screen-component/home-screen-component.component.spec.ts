import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenComponentComponent } from './home-screen-component.component';

describe('HomeScreenComponentComponent', () => {
  let component: HomeScreenComponentComponent;
  let fixture: ComponentFixture<HomeScreenComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeScreenComponentComponent]
    });
    fixture = TestBed.createComponent(HomeScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
