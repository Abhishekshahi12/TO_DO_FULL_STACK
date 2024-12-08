import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : String,password : String){
    if (username === 'Abhishek' && password === 'Dummy'){
      return true;
    }
    return false;
  }
}
