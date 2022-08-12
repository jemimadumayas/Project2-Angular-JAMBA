import { Component, OnInit } from '@angular/core';
import { Customer } from '../objects/Customer';
import { GetService } from '../get.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
  customer=this.jsonObj as Customer;
  constructor(private _service:GetService) { }

  ngOnInit(): void {
    console.log(this.customer);
  }

  onSubmit(editProfile:any){
    let updateForm = editProfile.value;
    console.log(updateForm);

    //this.customer.customerId = this.customer.d;
    this.customer.username = updateForm.inputUsername;
    this.customer.password = updateForm.inputPassword;
    this.customer.email = updateForm.inputEmail;
    this.customer.firstName = updateForm.inputFirstName;
    this.customer.lastName = updateForm.inputLastName;
    this.customer.accountBalance = updateForm.inputAccountBalance;
    this.customer.phoneNumber = updateForm.inputPhoneNumber;
    this.customer.address = updateForm.inputAddress; 

    console.log(this.customer);

    this._service.updateCustomer(this.customer).subscribe(data=>this.customer=data);

    alert('Your account information has been updated');
  }
}
