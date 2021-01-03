import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FicheClientFormService {

  constructor(private fb: FormBuilder) { }

  buildForm(): FormGroup {
return this.fb.group({
  agent: new FormControl(
    {
      value: '',
      disabled: false
    },
    {
      validators: []
    }
    ),
  nom: new FormControl(
    {
      value: '',
      disabled: false
    },
    {
      validators: []
    }
    ),

    prenom: new FormControl(
      {
        value: '',
        disabled: false
      },
      {
        validators: []
      }
      ),
      adresse: new FormControl(
        {
          value: '',
          disabled: false
        },
        {
          validators: []
        }
        ),
        email: new FormControl(
          {
            value: '',
            disabled: false
          },
          {
            validators: []
          }
          ),
          telephone: new FormControl(
            {
              value: '',
              disabled: false
            },
            {
              validators: []
            }
            ),
            status: new FormControl(
              {
                value: '',
                disabled: false
              },
              {
                validators: []
              }
              ),
              typeChauffage: new FormControl(
                {
                  value: '',
                  disabled: false
                },
                {
                  validators: []
                }
                ),
                surfaceLogement: new FormControl(
                  {
                    value: '',
                    disabled: false
                  },
                  {
                    validators: []
                  }
                  ),
                  ineteressement: new FormControl(
                    {
                      value: '',
                      disabled: false
                    },
                    {
                      validators: []
                    }
                    ),
                    informationsComplementaire: new FormControl(
                      {
                        value: '',
                        disabled: false
                      },
                      {
                        validators: []
                      }
                      ),
                      rdv: new FormControl(
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
