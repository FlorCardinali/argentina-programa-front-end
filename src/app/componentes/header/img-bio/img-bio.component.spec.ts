import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBioComponent } from './img-bio.component';

describe('ImgBioComponent', () => {
  let component: ImgBioComponent;
  let fixture: ComponentFixture<ImgBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
