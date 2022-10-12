import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rutearHacia(url){
    this.router.navigate([url]);
  }

}
