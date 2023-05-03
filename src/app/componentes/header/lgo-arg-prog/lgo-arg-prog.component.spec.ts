import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgoArgProgComponent } from './lgo-arg-prog.component';

describe('LgoArgProgComponent', () => {
  let component: LgoArgProgComponent;
  let fixture: ComponentFixture<LgoArgProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgoArgProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgoArgProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
