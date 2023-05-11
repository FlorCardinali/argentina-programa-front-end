import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesBarraComponent } from './botones-barra.component';

describe('BotonesBarraComponent', () => {
  let component: BotonesBarraComponent;
  let fixture: ComponentFixture<BotonesBarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesBarraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
