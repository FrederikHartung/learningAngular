import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  hideDetails = true;
  log = [];

  onClick(){
    this.hideDetails = !this.hideDetails;

    if (!this.hideDetails) {
      this.log.push(new Date());
    }
  }
}
