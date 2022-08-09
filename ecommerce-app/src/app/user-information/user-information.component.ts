import { Component, OnInit } from '@angular/core';
import { getService } from '../movie-get.service';
import { Customer } from '../objects/Customer';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  customer:Customer|any;
  constructor(private service:getService) { }

  ngOnInit(): void {
    //temporarily auto-logging in so that i can test run the user profile
    this.service.getCustomer('ccccc').subscribe(data=>this.customer=data);
  }
}
