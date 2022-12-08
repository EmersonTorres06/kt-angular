import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsButtonComponent } from './ems-button.component';

describe('EmsButtonComponent', () => {
  let component: EmsButtonComponent;
  let fixture: ComponentFixture<EmsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
