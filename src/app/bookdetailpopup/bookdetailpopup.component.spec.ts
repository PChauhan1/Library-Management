import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdetailpopupComponent } from './bookdetailpopup.component';

describe('BookdetailpopupComponent', () => {
  let component: BookdetailpopupComponent;
  let fixture: ComponentFixture<BookdetailpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookdetailpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookdetailpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
