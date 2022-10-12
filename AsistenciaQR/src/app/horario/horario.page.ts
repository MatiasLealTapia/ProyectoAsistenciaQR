import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rutearHacia(url){
    this.router.navigate([url]);
  }

}
