import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleComponentComponent } from './shuffle-component.component';

describe('ShuffleComponentComponent', () => {
  let component: ShuffleComponentComponent;
  let fixture: ComponentFixture<ShuffleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuffleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
