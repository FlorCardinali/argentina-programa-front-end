import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgProgComponent } from './logo-arg-prog.component';

describe('LgoArgProgComponent', () => {
  let component: LogoArgProgComponent;
  let fixture: ComponentFixture<LogoArgProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArgProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoArgProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
