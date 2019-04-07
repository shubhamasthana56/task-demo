import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Content } from './sub-header';
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  stickyFilterOffset: number;
  touchedCeiling = false;
  content: Content;

  constructor() { }
  ngOnInit() {
    };

  }

