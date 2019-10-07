import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  page: number = 0;
  pp: number= 2;

  constructor(private http: HttpClient) { }
  getUsers() {
    this.page++;
    this.pp++;
    console.log(this.page);
    return this.http.get('https://reqres.in/api/users?per_page='+this.pp)
    //return this.http.get('https://reqres.in/api/users?page='+this.page+'&per_page=4')
  }  
}
