import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  private async handleHttpError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.router.navigate(['/login']);
    }
    throw error;
  }

  async getCompanies(): Promise<any> {
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/companies`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }));
      return response;
    } catch (error: any) {
      await this.handleHttpError(error);
    }
  }

  async createCompany(company: any): Promise<any> {
    try {
      const response = await firstValueFrom(this.http.post(`${this.apiUrl}/companies`, company, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }));
      return response;
    } catch (error: any) {
      await this.handleHttpError(error);
    }
  }

  async updateCompany(company: any): Promise<any> {
    try {
      const response = await firstValueFrom(this.http.patch(`${this.apiUrl}/companies/${company.id}`, {
        email: company.email,
        name: company.name,
        address: company.address,
        phone: company.phone,
        CNPJ: company.CNPJ
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }));
      return response;
    } catch (error: any) {
      await this.handleHttpError(error);
    }
  }

  async deleteCompany(company: any): Promise<any> {
    try {
      const response = await firstValueFrom(this.http.delete(`${this.apiUrl}/companies/${company.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }));
      return response;
    } catch (error: any) {
      await this.handleHttpError(error);
    }
  }

  async getCompanyById(id: string): Promise<any> {
    try {
      const response = await firstValueFrom(this.http.get(`${this.apiUrl}/companies/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }));
      return response;
    } catch (error: any) {
      await this.handleHttpError(error);
    }
  }
}
