import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactMethods =[
      {id :1 , name :'Email'},
      {id :2 , name :'Phone'}
  ];

  genderArray = [
    { id : 1 , name : 'Male'},
    { id : 2 , name : 'Female'}
  ];

  log(x){
    //console.log(x);
  }

  submit(f){
    console.log(f);
    console.log("Josn data="+f.value);
    if(f.valid){
      alert("Success. Check the console for input data.");
      console.log("firstName = "+f.value.contact.firstName);
      console.log("comment = "+f.value.comment);
    }else{
      alert("Wrong Inputs");
    }
    
  }
}
