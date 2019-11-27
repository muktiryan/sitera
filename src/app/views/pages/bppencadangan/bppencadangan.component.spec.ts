import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BppencadanganComponent } from './bppencadangan.component';

describe('BppencadanganComponent', () => {
  let component: BppencadanganComponent;
  let fixture: ComponentFixture<BppencadanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BppencadanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BppencadanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
