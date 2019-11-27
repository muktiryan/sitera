import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BphomeComponent } from './bphome.component';

describe('BppencadanganComponent', () => {
  let component: BphomeComponent;
  let fixture: ComponentFixture<BphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
