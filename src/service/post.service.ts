import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private Http: HttpClient) { }
  userData() {
    return this.Http.get(`https://jsonplaceholder.typicode.com/posts`);
  }
}

