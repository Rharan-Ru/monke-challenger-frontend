import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  async getCompanies(): Promise<any> {
    const response = await firstValueFrom(this.http.get(`${this.apiUrl}/companies`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }));
    return response;
  }

  async createCompany(company: any): Promise<any> {
    const response = await firstValueFrom(this.http.post(`${this.apiUrl}/companies`, company, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }));
    return response;
  }

  async updateCompany(company: any): Promise<any> {
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
  }

  async deleteCompany(company: any): Promise<any> {
    const response = await firstValueFrom(this.http.delete(`${this.apiUrl}/companies/${company.id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }));
    return response;
  }

  async getCompanyById(id: string): Promise<any> {
    const response = await firstValueFrom(this.http.get(`${this.apiUrl}/companies/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }));
    return response;
  }
}
