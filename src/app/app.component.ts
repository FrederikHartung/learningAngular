import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'DummyName';
  allowReset = this.userName === '' ? false : true;
  title = 'my-second-app'

  onClick() {
    this.userName = '';
    this.allowReset = false;
    console.log('Button was clicked');
  }

  onInput(event: Event) {
    let newValue = (<HTMLInputElement>event.target).value;
    this.userName = newValue;
    
    if(newValue === '') {
      this.allowReset = false;
    } else {
      this.allowReset = true;
    }

    console.log('is allowed to reset: ' + this.allowReset);
  }
}
