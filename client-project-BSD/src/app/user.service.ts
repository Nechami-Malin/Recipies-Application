import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
 
  login(userLogin:{}):Observable<any>{
   console.log("userLogin", userLogin);
    //  let y=  this.http.post('/api/User/Login',userLogin)
     let y=  this.http.post('https://localhost:7155/api/User/Login',userLogin)
   
     console.log(y);
     return y;
  }
  register(register: User) {
    alert(register+"register")
    return this.http.post('https://localhost:7155/api/User/Register', register)
  }
  getUser():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:7155/api/User');

  }


}
