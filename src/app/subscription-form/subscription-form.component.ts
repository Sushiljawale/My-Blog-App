import { Component, OnInit } from '@angular/core';
import { Sub } from '../model/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  constructor(){}
  isEmailError:boolean=true;
  isSubscribed:boolean=true;

  ngOnInit(): void {
 
  }

  onSubmit(formVal:any){
  const subdata:Sub={
    name: formVal.name,
    email: formVal.email
    
  }
  console.log(subdata);
  if (formVal.email) {
    this.isEmailError = true;
    this.isSubscribed = false;
  } else {
    this.isEmailError = false;
    this.isSubscribed = true;
  }

}
  
}
