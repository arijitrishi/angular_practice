import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonListsComponent } from './sales-person-lists.component';

describe('SalesPersonListsComponent', () => {
  let component: SalesPersonListsComponent;
  let fixture: ComponentFixture<SalesPersonListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersonListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersonListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
