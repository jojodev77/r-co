import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InformationFormulaireService {
  constructor(private fb: FormBuilder) { }

  buildForm(): FormGroup {
return this.fb.group({

  type: new FormControl(
    {
      value: '',
      disabled: false
    },
    {
      validators: []
    }
    ),

    title: new FormControl(
      {
        value: '',
        disabled: false
      },
      {
        validators: []
      }
      ),

      informations: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          validators: []
        }
        ),

        validationDate: new FormControl(
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
