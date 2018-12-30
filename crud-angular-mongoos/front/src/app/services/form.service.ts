import { Injectable } from '@angular/core';
import {Product} from '../interface/product'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }
 link:string = "http://localhost:3000/"

 httpOptions={
  headers: new HttpHeaders({
  'Content-Type':  'application/json',
  })
}   

 post(obj:any):Observable<Product> {
   return this.http.post  <Product>(this.link,obj,this.httpOptions).pipe(
    retry(3), // retry a failed request up to 3 times
    catchError(err=> {throw err} )   
  );
}

 get():Observable<Product[]>{
   return this.http.get <Product[]>(this.link)
 }

updateById(id:string, obj:Product):Observable<Product>{
  debugger;
   return this.http.put <Product>(this.link+id , obj ,this.httpOptions ).pipe(
    retry(3), 
    catchError(err=> {throw err} ))
}


deleteById(id:string):Observable<Product>{
  return this.http.delete <Product> (this.link+id).pipe(
    retry(3), 
    catchError(err=> {throw err} ))
}

getById(id:string):Observable<Product>{
  return this.http.get <Product> (this.link+id).pipe(
    retry(3), 
    catchError(err=> {throw err} ))
}
}




