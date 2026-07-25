import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-shared',
  imports: [ReactiveFormsModule],
  templateUrl: './inputShared.html',
  styleUrl: './inputShared.css',
})
export class InputShared {
  @Input() type : string = "text"
  @Input() controller : FormControl | undefined
  @Input() placeHolder : string = ""
  @Input() labelName : string = ""
}
