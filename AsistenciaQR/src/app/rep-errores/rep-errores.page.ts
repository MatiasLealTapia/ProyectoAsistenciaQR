import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-rep-errores',
  templateUrl: './rep-errores.page.html',
  styleUrls: ['./rep-errores.page.scss'],
})
export class RepErroresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rutearHacia(url){
    this.router.navigate([url]);
  }

}
