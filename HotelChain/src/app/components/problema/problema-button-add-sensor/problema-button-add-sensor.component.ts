import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-problema-button-add-sensor',
  templateUrl: './problema-button-add-sensor.component.html',
  styleUrls: ['./problema-button-add-sensor.component.scss'],
})
export class ProblemaButtonAddSensorComponent  implements OnInit {

  sensorAdded: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  

  addSensor() {
    this.sensorAdded = true;
  
    setTimeout(() => {
      this.sensorAdded = false;
      this.navigateToHome();
    }, 3000);
  }

}
