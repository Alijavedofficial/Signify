import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigncanvasComponent } from './signcanvas.component';

describe('SigncanvasComponent', () => {
  let component: SigncanvasComponent;
  let fixture: ComponentFixture<SigncanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigncanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigncanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
