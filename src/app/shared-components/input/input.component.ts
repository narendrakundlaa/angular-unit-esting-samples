import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() name: string;
  @Input() formGroup: FormGroup;
  @Input() model: any;
  @Input() type: any;
  @Input() placeholder: any;
  upper: any;
  // @Input() required: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    /** space before capital letterS */
    this.upper = this.name.replace(/([A-Z])/g, ' $1').trim();

  }
}
