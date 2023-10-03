import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  authenticate(): void {
    this.isLoggedIn = true;
  }

}
