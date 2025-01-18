import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems: any
  links: any
  dropClose=true
  lang="Magyar"

  constructor(private config:ConfigService){
    this.config.getLinks().subscribe(
      (res:any)=>this.links=res["menuItems"]
    )
  }

  setLang(lang:string){
    this.lang=lang=="hu"?"Magyar":"English"
    this.config.setLang(lang)
    this.dropClose=true
  }

}
