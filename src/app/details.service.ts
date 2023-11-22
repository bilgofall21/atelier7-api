import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) {}
  detailData (){
    return this.http.get('http://jsonplaceholder.typicode.com/photos')
  }

}
