import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  databaseAPI="https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app./"

  private adatSub=new Subject()
  constructor(private http:HttpClient) { 
  this.downloadAll()
  }

  getAll(){
  return this.adatSub
  }

  private downloadAll(){
  this.http.get(this.databaseAPI+".json").subscribe(
    (res:any)=>{
        let adattomb=[]
        for (const key in res) {
          adattomb.push({azon:key,...res[key]})
          }
        this.adatSub.next(adattomb)
        }
    )
  }

  newData(data:any){
    this.http.post(this.databaseAPI+".json",data).forEach(
      ()=>this.downloadAll()
    )
  }
  updateData(data:any){
    this.http.put(this.databaseAPI+data.azon+".json",data).forEach(
      ()=>this.downloadAll()
    )
  }

  deleteData(data:any){
    this.http.delete(this.databaseAPI+data.azon+".json").forEach(
      ()=>this.downloadAll()
    )
  }
}
