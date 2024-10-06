import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-message.component.html',
  styleUrl: './feedback-message.component.css'
})
export class FeedbackMessageComponent {
  @Input() feedbackErrors: string[] = [];
  @Input() feedbackMessages: string[] = [];
}
