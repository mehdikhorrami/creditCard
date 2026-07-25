import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputShared } from './inputShared/inputShared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule,InputShared,ReactiveFormsModule],
  exports: [InputShared]
})
export class SharedModule {}
