import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  get(id) {
    return this.http.get(env.url + 'users/' + id);
  }
  getAll() {
    return this.http.get(env.url + 'users/');
  }

}
