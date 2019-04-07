import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any
  @ViewChild('calculatorDetails') calculatorDetails;

  constructor(private router: Router) { }

  ngOnInit() {
    this.products = [
      {src:'assets/images/weight-gain.jpg', title:'Weight Gain', text:'Improve your charisma, These Product will help you out'},
      {src:'assets/images/weightloss.jpg', title:'Weight Loss', text:'Excess weight gives rise to several physical ailments, explore how can you help burnit out'},
      {src:'assets/images/digestivecare.jpg', title:'Digestive Care', text:'Better digestion is linked to better overall health and mental clarity supporting your digestive system with these supplements can go long way'},
      {src:'assets/images/skincare.jpg', title:'Skin Care', text:'These supplements can help your skin stay healthy and looks its best'}]
  }
  
 

}
