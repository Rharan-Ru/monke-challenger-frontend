import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css'
})
export class ConfirmationModalComponent {
  @Input() openModal = false;
  @Input() confirmationMessage = '';
  @Output() closeModal = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }

  onConfirmAction() {
    this.onConfirm.emit();
  }
}
