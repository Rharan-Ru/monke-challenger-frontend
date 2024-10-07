import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { CompanyModalComponent } from "../company-modal/company-modal.component";
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from "../../confirmation-modal/confirmation-modal.component";
import { CompanyDetailComponent } from "../company-detail/company-detail.component";

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, CompanyModalComponent, ConfirmationModalComponent, CompanyDetailComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  confirmationMessage = 'Are you sure you want to delete this company?';
  loading = false;
  feedbackErrors: string[] = [];
  feedbackMessages: string[] = [];
  companies: any[] = [];
  companyDetails: any = {};
  openEditModal = false;
  openDeleteModal = false;
  openDetailsModal = false;
  openCreateModal = false;

  constructor(private companyService: CompanyService) {}

  async getCompanies() {
    const response = await this.companyService.getCompanies();
    this.companies = response;
  }

  async ngOnInit(): Promise<void> {
    await this.getCompanies();
  }

  async createCompany(company: any) {
    this.feedbackErrors = [];
    this.feedbackMessages = [];
    await this.companyService.createCompany(company);
    await this.getCompanies();
  }

  async updateCompany(company: any) {
    this.feedbackErrors = [];
    this.feedbackMessages = [];
    await this.companyService.updateCompany(company);
    await this.getCompanies();
  }

  async deleteCompany(company: any) {
    this.feedbackErrors = [];
    this.feedbackMessages = [];
    await this.companyService.deleteCompany(company);
    await this.getCompanies();
  }

  async onEdit(company: any) {
    this.feedbackErrors = [];
    this.feedbackMessages = [];
    try {
      this.loading = true;
      await this.updateCompany(company);
      this.feedbackMessages = ['Update successful!'];
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.closeModals();
    } catch (error: any) {
      const messageErrors = error.error.message.message;
      this.feedbackErrors = Array.isArray(messageErrors) ? messageErrors : [messageErrors];
    } finally {
      this.loading = false;

    }
  }

  async onDelete(company: any) {-
    await this.deleteCompany(company);
    this.closeModals();
  }

  async onCreate(company: any) {
    this.feedbackErrors = [];
    this.feedbackMessages = [];
    try {
      this.loading = true;
      await this.createCompany(company);
      this.feedbackMessages = ['Created successful!'];
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.closeModals();
    } catch (error: any) {
      const messageErrors = error.error.message.message || error.error.message;
      this.feedbackErrors = Array.isArray(messageErrors) ? messageErrors : [messageErrors];
    } finally {
      this.loading = false;

    }
  }

  async showDetails(company: any) {
    this.feedbackErrors = [];
    this.feedbackMessages = [];

    this.companyDetails = company;
    this.openDetailsModal = true;
  }

  async showEdit(company: any) {
    this.feedbackErrors = [];
    this.feedbackMessages = [];

    this.companyDetails = company;
    this.openEditModal = true;
  }

  async showDelete(company: any) {
    this.feedbackErrors = [];
    this.feedbackMessages = [];

    this.companyDetails = company;
    this.openDeleteModal = true;
  }

  async showCreate() {
    this.feedbackErrors = [];
    this.feedbackMessages = [];
    this.companyDetails = {};

    this.openCreateModal = true;
  }

  closeModals() {
    this.openEditModal = false;
    this.openDeleteModal = false;
    this.openDetailsModal = false;
    this.openCreateModal = false;
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}
