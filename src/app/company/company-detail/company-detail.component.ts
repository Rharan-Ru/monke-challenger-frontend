import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  @Input() companyData: any = {};
  @Input() openModal = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
