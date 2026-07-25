import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CardForm } from "./card-form/card-form";
import { SharedModule } from './shared/shared-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CardForm,SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('creditCard');
}
