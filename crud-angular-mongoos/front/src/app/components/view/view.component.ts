import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import {Product} from '../../interface/product';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  inventory: Product[]=[] 
  constructor(private fs:FormService, private route:ActivatedRoute) { 


    
  }


  ngOnInit() {
    
    this.route.params.subscribe((id)=>{
      this.fs.get().subscribe((data)=>{
        switch(id.id){
          case '1':
             this.inventory=data.filter(product=>parseInt(product.price)<=200);
             console.log(this.inventory);
             break;
          case '2':
              this.inventory=data.filter(product=>parseInt(product.price)>200);
              console.log(this.inventory);
              break;

          default:
          this.fs.get().subscribe((data)=>{this.inventory=data;console.log(data)});


        }
      });
  })
}




}
