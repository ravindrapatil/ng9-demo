import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviepostersComponent } from './movieposters.component';

describe('MoviepostersComponent', () => {
  let component: MoviepostersComponent;
  let fixture: ComponentFixture<MoviepostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviepostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviepostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
