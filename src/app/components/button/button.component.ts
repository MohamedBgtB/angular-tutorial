import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent2 implements OnInit {

  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnclick = new EventEmitter();

  onclick() {
    this.btnclick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
