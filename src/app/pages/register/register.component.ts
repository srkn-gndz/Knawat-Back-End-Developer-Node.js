import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup = this.fb.group({
    fullname: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    ],
  });
  
  constructor(
    private fb: FormBuilder,
    public apiService: ApiService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.initForm();
  }

  get f() {
    return this.registrationForm.controls;
  }

  // initForm() {
  //   this.registrationForm = this.fb.group(
  //     {
  //       fullname: [
  //         '',
  //         Validators.compose([
  //           Validators.required,
  //           Validators.minLength(3),
  //           Validators.maxLength(20),
  //         ]),
  //       ]
  //     });
  // }

  isControlValid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation: string, controlName: string | number): boolean {
    const control = this.registrationForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName: string | number): boolean {
    const control = this.registrationForm.controls[controlName];
    return control.dirty || control.touched;
  }

  submit() {
  }

}
