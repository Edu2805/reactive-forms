import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  admissionFormGroup: FormGroup;
  

  constructor(private admissionFormBuilder: FormBuilder) { }

  ngOnInit() {

    this.admissionFormGroup = this.admissionFormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required, Validators.maxLength(30)]],
      zip: ['', [Validators.required, Validators.maxLength(10)]],
      state: ['', [Validators.required]],
      checkBos: ['', [Validators.required]]
    })
  }

}
