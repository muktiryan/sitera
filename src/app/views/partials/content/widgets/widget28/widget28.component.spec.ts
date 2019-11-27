import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget28Component } from './widget28.component';

describe('Widget28Component', () => {
  let component: Widget28Component;
  let fixture: ComponentFixture<Widget28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Widget28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Widget28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
