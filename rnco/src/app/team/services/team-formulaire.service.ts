import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeamFormulaireService {

  constructor(private fb: FormBuilder) { }

  buildForm(): FormGroup {
return this.fb.group({
  //authentification

  email: new FormControl(
    {
      value: '',
      disabled: false
    },
    {
      validators: []
    }
    ),

    password: new FormControl(
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
