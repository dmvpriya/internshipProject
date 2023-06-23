import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFormComponent } from './pdform.component';

describe('PdformComponent', () => {
  let component: PDFormComponent;
  let fixture: ComponentFixture<PDFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PDFormComponent]
    });
    fixture = TestBed.createComponent(PDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
