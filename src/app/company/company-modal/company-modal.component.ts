import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../loading/loading.component';
import { FeedbackMessageComponent } from '../../feedback-message/feedback-message.component';

@Component({
  selector: 'app-company-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoadingComponent, FeedbackMessageComponent],
  templateUrl: './company-modal.component.html',
  styleUrl: './company-modal.component.css'
})
export class CompanyModalComponent implements OnChanges {
  companyForm: FormGroup;
  @Input() companyData: any = {};
  @Input() openModal = false;
  @Input() feedbackMessages: string[] = [];
  @Input() feedbackErrors: string[] = [];
  @Input() loading = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<any>();
  @Output() onCreate = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      address: ['', [Validators.required, Validators.minLength(1)]],
      phone: ['', [Validators.required, Validators.pattern(/^(\d{2})(\d{2})(\d{3})(\d{4})(\d{2}).*/), Validators.maxLength(14)]],
      CNPJ: ['', [Validators.required, Validators.pattern(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/), Validators.maxLength(18)]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['companyData'] && changes['companyData'].currentValue) {
      this.updateForm(changes['companyData'].currentValue);
    }
  }

  updateForm(companyData: any) {
    this.companyForm.patchValue({
      email: companyData.email || '',
      name: companyData.name || '',
      address: companyData.address || '',
      phone: companyData.phone || '',
      CNPJ: companyData.CNPJ || '',
    });
  }

  onClose() {
    this.closeModal.emit();
  }

  async onSubmit() {
    if (!this.companyData.id) {
      this.onCreate.emit(this.companyForm.value);
      return
    }
    this.companyForm.value.id = this.companyData.id;
    if (this.companyForm.valid) {
      this.onEdit.emit(this.companyForm.value);
    }
  }
}
