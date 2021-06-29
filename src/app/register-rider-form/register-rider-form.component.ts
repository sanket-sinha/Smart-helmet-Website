import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'register-rider-form',
  templateUrl: './register-rider-form.component.html',
  styleUrls: ['./register-rider-form.component.css']
})
export class RegisterRiderFormComponent implements OnInit {
  details$: AngularFireObject<any>;
  ref: firebase.database.Reference;
  path;
  form = new FormGroup({
    riderDetails: new FormGroup({
      riderName: new FormControl('' , [
        Validators.required,
        Validators.minLength(3),
        ]),
      riderNumber: new FormControl('' , [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
       ]),
       riderEmail: new FormControl('' , [
        Validators.required,
        Validators.email
       ]),
       riderDob: new FormControl('' , [
        Validators.required,
       ]),
       riderGender: new FormControl('' , [
        Validators.required,
       ]),
       riderBlood: new FormControl('' , [
        Validators.required,
       ]),
       riderAddress: new FormControl('' , [
        Validators.required,
        Validators.minLength(10)
       ])
    }),
    emergencyDetails: new FormGroup({
      emergencyName: new FormControl('' , [
        Validators.required,
        Validators.minLength(3),
        ]),
      emergencyNumber: new FormControl('' , [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
       ])
    })
  });
  Id;
  constructor(private activatedRoute: ActivatedRoute, db: AngularFireDatabase){
    this.activatedRoute.queryParams.subscribe(params =>{
      this.Id = params['id'];
      this.path ='/Users/Device/' + params['id'];
      this.details$=db.object(this.path);
    });
  }

  ngOnInit() {
  }

  gender = [
    {name: 'Male'},
    {name: 'Female'}
  ]

  blood = [
    {name: 'A+'},
    {name: 'A-'},
    {name: 'B+'},
    {name: 'B-'},
    {name: 'AB+'},
    {name: 'AB-'},
    {name: 'O+'},
    {name: 'O-'}
  ]

  get riderName(){
    return this.form.get('riderDetails.riderName');
  }
  get riderNumber(){
    return this.form.get('riderDetails.riderNumber');
  }
  get riderEmail(){
    return this.form.get('riderDetails.riderEmail');
  }
  get riderDob(){
    return this.form.get('riderDetails.riderDob');
  }
  get riderGender(){
    return this.form.get('riderDetails.riderGender');
  }
  get riderBlood(){
    return this.form.get('riderDetails.riderBlood');
  }
  get riderAddress(){
    return this.form.get('riderDetails.riderAddress');
  }
  get emergencyName(){
    return this.form.get('emergencyDetails.emergencyName');
  }
  get emergencyNumber(){
    return this.form.get('emergencyDetails.emergencyNumber');
  }
  
  isSaved=false;
  submit(){
    this.details$.set({
      Name: this.riderName.value,
      Dob: this.riderDob.value,
      Gender: this.riderGender.value,
      Bloodgroop: this.riderBlood.value,
      Phone: this.riderNumber.value,
      Email: this.riderEmail.value,
      Address: this.riderAddress.value,
      EmergencyName: this.emergencyName.value,
      EmergencyNumber: this.emergencyNumber.value
    });
    this.riderAddress.setValue('');
    this.riderName.setValue('');
    this.riderDob.setValue('');
    this.riderGender.setValue('');
    this.riderBlood.setValue('');
    this.riderNumber.setValue('');
    this.riderEmail.setValue('');
    this.emergencyName.setValue('');
    this.emergencyNumber.setValue('')
    this.isSaved=true;
  }
  
}
