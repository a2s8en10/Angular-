import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api';
  users:any;
  constructor(private UserData:UserDataService)
  {
    UserData.users().subscribe((data) =>
      {
        console.warn("data",data);
        this.users = data;
      });

      this.UserData.users().subscribe((data)=>{
        this.users = data;
      });
  }
  getUserFormData(data : NgModel)
  {
    this.UserData.saveUsers(data).subscribe((result) => {
      console.warn(result);
    });
  }
}
