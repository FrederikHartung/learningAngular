import { Component } from '@angular/core';

@Component({
  selector: 'app-specialday',
  templateUrl: './specialday.component.html',
  styleUrl: './specialday.component.css'
})
export class SpecialdayComponent {
  specialDay = new Date('2000-01-01 12:00:00')
  monthToSpecialDay: number
  daysToSpecialDay: number
  hoursToSpecialDay: number
  minutesToSpecialDay: number
  secondsToSpecialDay: number
  
  calcTime(){
    this.monthToSpecialDay = Math.floor((this.specialDay.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 30)) * -1
    this.daysToSpecialDay = Math.floor((this.specialDay.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) * -1
    this.hoursToSpecialDay = Math.floor((this.specialDay.getTime() - new Date().getTime()) / (1000 * 60 * 60)) * -1
    this.minutesToSpecialDay = Math.floor((this.specialDay.getTime() - new Date().getTime()) / (1000 * 60)) * -1
    this.secondsToSpecialDay = Math.floor((this.specialDay.getTime() - new Date().getTime()) / (1000)) * -1
    
    setTimeout(() => {
      this.calcTime();
    }, 1000);
  }

  constructor() {
    this.calcTime();
  }
}
