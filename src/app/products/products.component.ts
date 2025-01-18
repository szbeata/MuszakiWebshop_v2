import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  termekek: any
  newTermek: any={}
  columns: any
  gombok: any={}
  buttons:any
  oszlopok=["id","name","category","description","price"]

  constructor(
    private base:BaseService,
    private config:ConfigService)
    {
    this.base.getAll().subscribe(
      (res)=>{
        console.log(res)
        this.termekek=res
      }
    )
    this.config.getLinks().subscribe(
      (res:any)=>{
        console.log('Columns:', res["columns"]),
        console.log('Gombok:', res["gombok"]),
        this.columns=res["columns"],
        this.gombok=res["gombok"]
      }
    )
  }
  updateData(data:any){
    this.base.updateData(data)
  }

 deleteData(data:any){
    this.base.deleteData(data)
  }

 newData(){
    this.base.newData(this.newTermek)
    this.newTermek={}
  }
}
