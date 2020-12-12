import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-idendite',
  templateUrl: './idendite.component.html',
  styleUrls: ['./idendite.component.scss']
})
export class IdenditeComponent implements OnInit {
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  constructor() { }

  ngOnInit(): void {
  }

  


}

