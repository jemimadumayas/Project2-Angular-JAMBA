import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetService } from './Get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  title = "ecommerce-app"

  public totalItemInCart: number = 0;

  constructor(private modalService: NgbModal, private _service:GetService) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  // add qty on shopping bag subscript
  ngOnInIt():void {
    this._service.getMovies().subscribe(Response => {
      this.totalItemInCart = Response.length;
      console.log(this.totalItemInCart)
    })
  }

  userIsLogedIn(): any{
    if(sessionStorage.getItem("currentUser")) {
      return true;
    }
  }

  logout() {
    sessionStorage.clear();
  }
}
