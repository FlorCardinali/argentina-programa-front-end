import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSocialBarComponent } from './contenedor-social-bar.component';

describe('ContenedorSocialBarComponent', () => {
  let component: ContenedorSocialBarComponent;
  let fixture: ComponentFixture<ContenedorSocialBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorSocialBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorSocialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
