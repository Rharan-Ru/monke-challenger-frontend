import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<any> {
    const response = await firstValueFrom(this.http.post(`${this.apiUrl}/auth/login`, { email, password }));
    localStorage.setItem('token', (response as any).access_token);
    return response;
  }

  async register(email: string, password: string): Promise<any> {
    const response = await firstValueFrom(this.http.post(`${this.apiUrl}/user`, { email, password }));
    localStorage.setItem('token', (response as any).token);
    return response;
  }
}
