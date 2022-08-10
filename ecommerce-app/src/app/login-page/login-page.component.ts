import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../objects/Customer';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  customer = new Customer();
  msg:string = "";
  invalidLogin = false;

constructor( private _router: Router, private _service: RegisterService ) { }

  ngOnInit(): void {
  }

  loginCustomer() {
    this._service.authenticateUser(this.customer).subscribe(
      (data: any) => {
        // console.log("response recieve"),
        this._router.navigate(['/all-movies'])
        this.invalidLogin = false;
      },
      (error: any) => {
        // console.log("exception occured"),
        this.msg="Enter Valid Username and Password"
        this.invalidLogin = true;
      }
    )
  }
}
