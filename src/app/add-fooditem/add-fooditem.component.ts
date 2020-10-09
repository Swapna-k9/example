import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditem } from '../fooditem';
import { FooditemService } from '../fooditem.service';
@Component({
  selector: 'app-add-fooditem',
  templateUrl: './add-fooditem.component.html',
  styleUrls: ['./add-fooditem.component.css']
})
export class AddFooditemComponent implements OnInit {

  private fooditem:Fooditem;
  constructor(private fooditemService:FooditemService,private router:Router) {
    this.fooditem=new Fooditem();
   }

   public addFooditem():void{
     this.fooditemService.addFooditem(this.fooditem).subscribe(res=>{
       this.fooditem=new Fooditem();
       this.router.navigate(['/fooditemsList']);
     }
      )
   }

  ngOnInit() {
  }

}
