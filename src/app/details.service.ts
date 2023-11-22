import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) {}
  detailData (){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }

  getUserById(commentId: number): Observable<any> {
    const url = `${this.http}/${commentId}`;
    return this.http.get(url);
  }

}
