import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      designationOfEmploeeyee: ['', Validators.required],
      salary: ['']
    });
    // this.findInvalidControls();
  }
  onSubmit() {
    console.log(this.employeeForm.value);
    this.alertType = 'success';
    this.displayAlert = true;

    this.alertMessage = ` ${this.employeeForm.get('name').value} ..! Record has been created`;
  }
  closeAlert() {
    this.displayAlert = false;
  }

  // /** find field is required or not */
  // findInvalidControls() {
  //   const invalid = [];
  //   console.log(invalid);
  //   const controls = this.employeeForm.controls;
  //   for (const name in controls) {
  //     if (controls[name].invalid) {
  //       invalid.push(name);
  //     }
  //   }
  //   return invalid;
  // }
}
