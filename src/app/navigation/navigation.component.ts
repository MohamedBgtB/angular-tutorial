import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isActive = true;
  name: string = "simo";
  constructor() {

  }

  onNavClick() {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
  }



}
