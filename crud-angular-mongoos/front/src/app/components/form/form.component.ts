import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { FormService } from '../../services/form.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  id: string = "";
  search: string="";
  
  storeForm: FormGroup= new FormGroup({
    price: new FormControl("",[Validators.required]),
    title: new FormControl("",[Validators.required]), 
    pic: new FormControl("",[Validators.required]),
  })




  constructor(private fs:FormService, private router:Router) {
   }

  ngOnInit() {

  }


  
  priceSearch(price){
    debugger;
    this.router.navigate(["store",price])
  }


  post():void{
    this.fs.post(this.storeForm.value).subscribe(()=>{(console.log("added"));this.router.navigate(['/store'])});
  }

  updateById(){
     this.fs.updateById(this.id,this.storeForm.value).subscribe(()=>(console.log("updated")));
  }


  deleteById(){
    this.fs.deleteById(this.id).subscribe(()=>(console.log("deleted")));
    console.log(this.id)  
    // this.fs.deleteById(this.id);
  }

  getById(){
    this.fs.getById(this.id).subscribe((data)=>(console.log(data)));
  }


}
