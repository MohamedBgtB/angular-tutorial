import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  variavle: string = 'task traker';

  constructor() { }

  ngOnInit(): void {
  }

  toogleAddTask() {
    console.log('toggle from the childe')
  }

}
