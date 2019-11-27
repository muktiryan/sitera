import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'kt-simulasi',
  templateUrl: './simulasi.component.html',
  styleUrls: ['./simulasi.component.scss']
})
export class SimulasiComponent implements OnInit {
  loginForm: FormGroup;
  tenors = [
    {value: 120, viewValue: '120'},
    {value: 180, viewValue: '180'},
    {value: 240, viewValue: '240'}
  ];
  rumahs = [
    {value: 1, viewValue: 'Rumah Tingga'},
    {value: 2, viewValue: 'Apartment'},
    {value: 3, viewValue: 'Rumah Susun'}
  ];
  constructor(private fb: FormBuilder,) { 
    
  }

  ngOnInit() {
   
  }

}
