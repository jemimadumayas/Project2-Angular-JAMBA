import { Component, OnInit } from '@angular/core';
import { getService } from '../movie-get.service';
import { Customer } from '../objects/Customer';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  updatedCustomer:Customer|any;
/*editProfileForm = new FormGroup(
  {customerId: new FormControl(),
  username:new FormControl(),
  password: new FormControl(),
  email: new FormControl(),
  firstName : new FormControl(),
  lastName: new FormControl(),
  accountBalance: new FormControl(),
  address: new FormControl(),
  phoneNumber:new FormControl(),
  profilePicture:new FormControl()}
);*/

  constructor(private service:getService) { }

  ngOnInit(): void {
    //temporarily auto-logging in so that i can test run the user profile
    this.service.getCustomer('ccccc').subscribe(data=>this.updatedCustomer=data);
    console.log(this.updatedCustomer);
  }

  onSubmit(editProfileForm: { value: any; }){
    let updateForm = editProfileForm.value;
    console.log(updateForm);

    this.updatedCustomer.customerId = updateForm.id;
    this.updatedCustomer.username = updateForm.username;
    this.updatedCustomer.password = updateForm.password;
   /* this.updatedCustomer.email = updateForm.email;
    this.updatedCustomer.firstName = updateForm.firstName;
    this.updatedCustomer.lastName = updateForm.lastName;
    this.updatedCustomer.accountBalance = updateForm.accountBalance;
    this.updatedCustomer.phoneNumber = updateForm.phoneNumber;
    this.updatedCustomer.address = updateForm.address;
    this.updatedCustomer.profilePicture = updateForm.profilePicture; */

    console.log(this.updatedCustomer);

    this.service.updateCustomer(this.updatedCustomer).subscribe(data=>this.updatedCustomer=data);

    alert('Your account information has been updated');
  }
}
