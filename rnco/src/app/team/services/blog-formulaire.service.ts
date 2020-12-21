import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BlogFormulaireService {

  constructor(private fb: FormBuilder) { }

  buildForm(): FormGroup {
return this.fb.group({

  article: new FormControl(
    {
      value: '',
      disabled: false
    },
    {
      validators: []
    }
    ),

    author: new FormControl(
      {
        value: '',
        disabled: false
      },
      {
        validators: []
      }
      ),


})
  }
}
