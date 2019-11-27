import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BppemanfaatanComponent } from './bppemanfaatan.component';

describe('BppemanfaatanComponent', () => {
  let component: BppemanfaatanComponent;
  let fixture: ComponentFixture<BppemanfaatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BppemanfaatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BppemanfaatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
