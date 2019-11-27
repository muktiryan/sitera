import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget27Component } from './widget27.component';

describe('Widget27Component', () => {
  let component: Widget27Component;
  let fixture: ComponentFixture<Widget27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Widget27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Widget27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
