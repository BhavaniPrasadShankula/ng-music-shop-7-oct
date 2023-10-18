import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAlbumScreenComponent } from './admin-add-album-screen.component';

describe('AdminAddAlbumScreenComponent', () => {
  let component: AdminAddAlbumScreenComponent;
  let fixture: ComponentFixture<AdminAddAlbumScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddAlbumScreenComponent]
    });
    fixture = TestBed.createComponent(AdminAddAlbumScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
