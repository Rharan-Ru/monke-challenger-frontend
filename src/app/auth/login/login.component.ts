import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../loading/loading.component';
import { FeedbackMessageComponent } from '../../feedback-message/feedback-message.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoadingComponent, FeedbackMessageComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  feedbackErrors: string[] = [];
  feedbackMessages: string[] = [];
  showPassword = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.feedbackErrors = [];
      this.feedbackMessages = [];
      try {
        const { email, password } = this.loginForm.value;
        await this.authService.login(email, password)
        this.feedbackMessages = ['Login successful! We are redirecting you...'];
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.router.navigate(['/company']);
      } catch (error: any) {
        const messageErrors = error.error.message;
        this.feedbackErrors = Array.isArray(messageErrors) ? messageErrors : [messageErrors];
      } finally {
        this.loading = false;
      }
    }
  }

  async togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
