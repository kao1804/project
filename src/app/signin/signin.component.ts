import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private messageservice : MessageService, private cookie: CookieService) {
   }
   message:string ="";
   password:string=""
   
  
  

 

  ngOnInit(): void {
    
  }

  onClick(message:string){
   this.messageservice.setMessage(this.message)
}

  onSubmit(form :any){
    console.log(form);
   
    throw Error("something is wrong")
   
  }

}
