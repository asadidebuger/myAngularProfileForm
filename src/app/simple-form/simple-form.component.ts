import { Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  public profile :any;
  ngOnInit(): void {
    this.resetForm();
  }
  onSubmit(form: NgForm){

    console.log(form);
  }
  resetForm(){
    this.profile={fullname:"",username:"",email:"",confirmPassword:""};
  }

}
