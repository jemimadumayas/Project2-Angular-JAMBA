import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../objects/Customer';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  customer = new Customer();
  msg='';
  constructor(private _service: RegisterService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerCustomer(){
    this._service.registerPage(this.customer).subscribe (
      data => {
        console.log("response recieve");
        this._router.navigate(['/my-profile'])
      },
      error => {
        console.log("exception occured");
        this.msg="Username Unavailable";
      }
    )
  }
}
