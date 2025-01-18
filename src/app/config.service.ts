import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //menuItems:any=new BehaviorSubject([])
  private configData = new BehaviorSubject<any>([])

  constructor(private http:HttpClient) {
     this.loadConfigJson("hu")
   }

   private loadConfigJson(lang:string){
    this.http.get("assets/lang_"+lang+".json").subscribe(
      //(res:any)=> this.menuItems.next(res)
      (res:any)=> this.configData.next(res)
    )
   }

  public getLinks(){
    //return this.menuItems
    return this.configData.asObservable()
  }


  public setLang(lang:string){
    this.loadConfigJson(lang)
  }
}
