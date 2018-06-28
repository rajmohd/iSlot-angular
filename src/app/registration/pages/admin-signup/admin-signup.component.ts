import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  AdminSignup: FormGroup;
  constructor(private httpService: Http) {
    this.AdminSignup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      fullName: new FormControl('')
      })
  }
  ngOnInit() {
  }
   onSubmit() {
    console.log(this.AdminSignup.value);
    const url = 'https://id-application-form.firebaseio.com/applicationIds.json';
    this.httpService.post(url, this.AdminSignup.value)
      .subscribe(rsp => console.log(rsp));
    console.log('Posted');
  }

}
 
    
  


