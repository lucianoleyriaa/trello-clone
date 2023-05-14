import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'success';

  constructor() { }

  ngOnInit(): void {
  }

}
