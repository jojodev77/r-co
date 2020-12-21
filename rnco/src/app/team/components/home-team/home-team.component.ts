import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.scss']
})
export class HomeTeamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
