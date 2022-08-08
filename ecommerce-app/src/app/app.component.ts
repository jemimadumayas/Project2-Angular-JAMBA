import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
<<<<<<< HEAD
  title = "ecommerce-app"
=======
  title(title: any) {
    throw new Error('Method not implemented.');
  }
>>>>>>> 89ee558193e0f52663906d20172ce1bcd5315d1c
  constructor(private modalService: NgbModal) {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
