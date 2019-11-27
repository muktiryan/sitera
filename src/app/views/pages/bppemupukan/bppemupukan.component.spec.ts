import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BppemupukanComponent } from './bppemupukan.component';

describe('BppencadanganComponent', () => {
  let component: BppemupukanComponent;
  let fixture: ComponentFixture<BppemupukanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BppemupukanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BppemupukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
