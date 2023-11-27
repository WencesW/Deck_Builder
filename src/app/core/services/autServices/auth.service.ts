import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable, forkJoin, lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | null | undefined = null;

  constructor(private apiService: ApiService) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  public async login(email: string, password: string): Promise<boolean> {

    let isLogin = false;

    try {

      let apiResponse = this.apiService.getToAuth(email, password);
      let userRespone = await lastValueFrom(apiResponse);
      this.user = userRespone[0];

      if (this.user) {
        localStorage.setItem('token', this.user.id!.toString());
        isLogin = true;
      }
    } catch (error) {
      throw error;
    }

    return isLogin;
  }

  public logout(){
    this.user = undefined;
    localStorage.clear();
  }

  public checkAuthentication(): boolean{
    return localStorage.getItem('token') ? true : false;
  }

  public async registerNewUser(user: User): Promise<boolean> {
    let registerOk = false;
    try{
      registerOk=await this.authUserToRegister(user);
      if(registerOk){
        this.user = await lastValueFrom(this.apiService.addUser(user));  
      }
    }
    catch{
      console.log("error");
    }
    return registerOk;   
  }

  public async authUserToRegister(user: User): Promise<boolean> {
    let newUserRegister: User[] = [];
      try {
          const emailResult = await lastValueFrom(
            this.apiService.authEmailUserRegister(user.email!),
          );
          newUserRegister = emailResult;
        } catch (error) {
          console.log(error);
        }
    return newUserRegister.length === 0;
  }
  

}
