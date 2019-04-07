import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
  providers: [DataService]
})
export class ProductItemsComponent implements OnInit {
  supplements:any;

  constructor(private http: HttpClient, private DS:DataService) { }

  ngOnInit() {
      this.getdata();
    }
    getdata() {
      this.DS.getdata().subscribe((data) => {
        this.supplements = data;
      })
    }
  }
 


