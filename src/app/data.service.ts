import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly url = 'http://localhost:3000/survey';

  constructor(private http: HttpClient) { }
  getdata() {
      return this.http.get(this.url);
  }
}
