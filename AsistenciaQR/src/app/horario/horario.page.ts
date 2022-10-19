import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { CacheService } from "ionic-cache";
import { ClasesApiService } from "../services/clases-api.service"

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  clases:any;
  usuario:any;
  constructor(private api: ClasesApiService, private router: Router, private cache: CacheService) { }

  ngOnInit() {
    let key = 'nomUsuario';
    this.usuario = this.cache.getRawItem(key);
    console.log(this.usuario)
  }

  getClases(){
    this.api.getClases().subscribe((data)=>{
      this.clases=data;
      console.log(this.clases)
    });
  }

  rutearHacia(url){
    this.router.navigate([url]);
  }

}
