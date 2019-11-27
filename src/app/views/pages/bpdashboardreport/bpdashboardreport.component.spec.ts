import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpdashboardreportComponent } from './bpdashboardreport.component';

describe('BppencadanganComponent', () => {
  let component: BpdashboardreportComponent;
  let fixture: ComponentFixture<BpdashboardreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpdashboardreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpdashboardreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
