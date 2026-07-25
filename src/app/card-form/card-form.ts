import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputShared } from "../shared/inputShared/inputShared";

@Component({
  selector: 'app-card-form',
  imports: [JsonPipe, ReactiveFormsModule, InputShared],
  templateUrl: './card-form.html',
  styleUrl: './card-form.css',
})
export class CardForm {

  cardForm : FormGroup = new FormGroup({
    name : new FormControl('',
      [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)]),
    cardNumber : new FormControl('',
      [Validators.required]),
    expireDate : new FormControl('',
      [Validators.required]),
    securityCode : new FormControl('',
      [Validators.required])
  }); 
get nameControl(): FormControl {
    return this.cardForm.get('name') as FormControl;
  }
get cardNumberControl(): FormControl {
    return this.cardForm.get('cardNumber') as FormControl;
  }
get expireDateControl(): FormControl {
    return this.cardForm.get('expireDate') as FormControl;
  }
get securityControl(): FormControl {
    return this.cardForm.get('securityCode') as FormControl;
  }

  submitForm(){
    console.log(this.cardForm.value)
  }
  onReset(){
    this.cardForm.reset({name: 'resettedValue'})
  }
}
