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

      createPassword: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          validators: []
        }
        ),

        createEmail: new FormControl(
          {
            value: '',
            disabled: false
          },
          {
            validators: []
          }
          ),

          createStatus: new FormControl(
            {
              value: '',
              disabled: false
            },
            {
              validators: []
            }
            ),

            createRoles: new FormControl(
              {
                value: '',
                disabled: false
              },
              {
                validators: []
              }
              ),

            createfirstName: new FormControl(
              {
                value: '',
                disabled: false
              },
              {
                validators: []
              }
              ),

              createLastName: new FormControl(
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
