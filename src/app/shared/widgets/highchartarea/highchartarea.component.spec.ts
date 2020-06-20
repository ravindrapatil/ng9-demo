import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartareaComponent } from './highchartarea.component';

describe('HighchartareaComponent', () => {
  let component: HighchartareaComponent;
  let fixture: ComponentFixture<HighchartareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
