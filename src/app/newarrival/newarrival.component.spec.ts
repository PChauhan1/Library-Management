import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewarrivalComponent } from './newarrival.component';

describe('NewarrivalComponent', () => {
  let component: NewarrivalComponent;
  let fixture: ComponentFixture<NewarrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewarrivalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewarrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
