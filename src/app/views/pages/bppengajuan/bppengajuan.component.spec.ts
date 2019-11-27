import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BppengajuanComponent } from './bppengajuan.component';

describe('BppengerahanComponent', () => {
  let component: BppengajuanComponent;
  let fixture: ComponentFixture<BppengajuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BppengajuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BppengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
