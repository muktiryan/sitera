import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-pengajuanmanfaat',
  templateUrl: './pengajuanmanfaat.component.html',
  styleUrls: ['./pengajuanmanfaat.component.scss']
})
export class PengajuanmanfaatComponent implements OnInit {

  public isChoose = false


  constructor() { }

  ngOnInit() {
  }

  chooseBank(valueCode){
    this.isChoose= true;
    switch(valueCode) { 
      case 1: { 
         console.log("Mandiri"); 
         break; 
      } 
      case 2: { 
         console.log("BNI"); 
         break; 
      } 
      case 3: {
         console.log("BTN"); 
         break;    
      } 
      case 4: { 
         console.log("BRI"); 
         break; 
      }  
      default: { 
         console.log("Invalid choice"); 
         break;              
      } 
   }
  }


}
