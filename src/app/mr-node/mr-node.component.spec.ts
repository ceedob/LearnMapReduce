import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrNodeComponent } from './mr-node.component';

describe('MrNodeComponent', () => {
  let component: MrNodeComponent;
  let fixture: ComponentFixture<MrNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
