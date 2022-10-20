import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { CacheService } from "ionic-cache";

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  clases:any;
  usuario:any;
  constructor(private router: Router, private cache: CacheService) {
    fetch('https://matiaslealtapia.github.io/ionicApiRestProyectoQR/clases.json')
      .then(res => res.json())
      .then(res => {
          // this is not allowed
          // let a:Actor = <Actor>res;

          // I use an intermediate variable a to get around this...
          let a:any = res;
          this.clases=res;
          console.log(this.clases);
      })
   }

  ngOnInit() {
    let key = 'nomUsuario';
    this.usuario = this.cache.getRawItem(key);
    console.log(this.usuario)
  }

  rutearHacia(url){
    this.router.navigate([url]);
  }

}
