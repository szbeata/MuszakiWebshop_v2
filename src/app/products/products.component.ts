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
  //buttonItems: any
  buttons:any
  oszlopok=["id","name","category","description","price"]

  addButton: any
  editButton: any
  delButton: any

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
        console.log('addButton:', res["addButton"]),
        this.columns=res["columns"]
        //this.buttons=res["buttons"]
      }
    )

    this.config.getLinks().subscribe(
      (res:any)=>{this.addButton=res["addButton"]}
    )

    this.config.getLinks().subscribe(
      (res:any)=>{this.editButton=res["editButton"]}
    )

    this.config.getLinks().subscribe(
      (res:any)=>{this.delButton=res["delButton"]}
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
