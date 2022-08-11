import { Component, OnInit } from '@angular/core';
import { Customer } from '../objects/Customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getFirstName() {
    return sessionStorage.getItem("firstname");
  }

  getLastName() {
    return sessionStorage.getItem("lastname");
  }

  getAddress() {
    return sessionStorage.getItem("address");
  }

  getEmail() {
    return sessionStorage.getItem("email");
  }

  getPhone() {
    return sessionStorage.getItem("phone");
  }

  getBalance(){
    return sessionStorage.getItem("balance");
  }

  getUsername() {
    return sessionStorage.getItem("username");
  }
}
