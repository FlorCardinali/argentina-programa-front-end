import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPerfilComponent } from './texto-perfil.component';

describe('TextoPerfilComponent', () => {
  let component: TextoPerfilComponent;
  let fixture: ComponentFixture<TextoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
