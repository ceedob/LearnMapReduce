import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapReduceViewComponent } from './map-reduce-view.component';

describe('MapReduceViewComponent', () => {
  let component: MapReduceViewComponent;
  let fixture: ComponentFixture<MapReduceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapReduceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapReduceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
