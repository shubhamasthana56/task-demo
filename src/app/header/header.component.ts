import { Component, OnInit } from '@angular/core';
import { ContentProviderService } from '../services/content-provider.service';
import { Header } from './Header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed = true;
  header: any;
  headerModel: Header;
  constructor() { }

  ngOnInit() {
  this.header = ['SUPPLEMENTS','ESSENTIAL OILS', 'NATURAL FOODS']    
  }

}
