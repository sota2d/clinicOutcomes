import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterButtonGroupComponent } from './filter-button-group.component';

describe('FilterButtonGroupComponent', () => {
  let component: FilterButtonGroupComponent;
  let fixture: ComponentFixture<FilterButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterButtonGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
