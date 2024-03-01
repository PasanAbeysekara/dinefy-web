import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  setIsLogged(isLoggedIn: boolean): void{
    sessionStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }

  getIsLoggedIn(): boolean{
    return sessionStorage.getItem('isLoggedIn') == 'true' ? true : false;
  }


}
