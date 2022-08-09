import { Component, OnInit } from '@angular/core';
import { getService } from '../movie-get.service';
import { Customer } from '../objects/Customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  customer:Customer|any;
  constructor(private service:getService) { }

  ngOnInit(): void {
    //temporarily auto-logging in so that i can test run the user profile
    this.service.getCustomer('customer1').subscribe(data=>this.customer=data);
  }

}
