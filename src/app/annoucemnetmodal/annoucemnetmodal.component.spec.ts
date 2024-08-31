import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucemnetmodalComponent } from './annoucemnetmodal.component';

describe('AnnoucemnetmodalComponent', () => {
  let component: AnnoucemnetmodalComponent;
  let fixture: ComponentFixture<AnnoucemnetmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnoucemnetmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucemnetmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
