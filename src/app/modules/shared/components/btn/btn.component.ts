import { Component, Input, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'success';
  @Input() disabled = false;
  @Input() loading = false;

  faSpinner = faSpinner;

  constructor() { }

  ngOnInit(): void {
  }

}
