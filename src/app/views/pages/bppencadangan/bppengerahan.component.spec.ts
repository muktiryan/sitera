import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BppengerahanComponent } from './bppengerahan.component';

describe('BppengerahanComponent', () => {
  let component: BppengerahanComponent;
  let fixture: ComponentFixture<BppengerahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BppengerahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BppengerahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
