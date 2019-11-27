import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpkepesertaanComponent } from './bpkepesertaan.component';

describe('BpkepesertaanComponent', () => {
  let component: BpkepesertaanComponent;
  let fixture: ComponentFixture<BpkepesertaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpkepesertaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpkepesertaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
