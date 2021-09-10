import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoddingComponent } from './codding.component';

describe('CoddingComponent', () => {
  let component: CoddingComponent;
  let fixture: ComponentFixture<CoddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
