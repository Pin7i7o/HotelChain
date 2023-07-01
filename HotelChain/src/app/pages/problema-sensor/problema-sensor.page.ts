import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from '../../services/alerts-service.service';

@Component({
  selector: 'app-problema',
  templateUrl: './problema-sensor.page.html',
  styleUrls: ['./problema-sensor.page.scss'],
})

export class ProblemaSensorPage implements OnInit {
  alerta: Alerta | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.alerta = params as Alerta;
    });
  }

}
