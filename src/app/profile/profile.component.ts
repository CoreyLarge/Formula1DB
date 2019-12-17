import { Component, OnInit } from '@angular/core';
import {WebService} from '../web.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private webService: WebService) { }

  user;

  ngOnInit() {
      this.webService.user.subscribe(user =>{
          this.user = user;
      });
  }

}
