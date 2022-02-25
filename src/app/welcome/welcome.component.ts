import { Component, OnInit,Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  username: any= '';
  constructor(private messageservice: MessageService,private cookie:CookieService) {
    
   }
  ngOnInit(): void {
    this.username = this.messageservice.getMessage()
  }

}
