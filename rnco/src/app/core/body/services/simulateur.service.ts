import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SimulateurService {

  constructor(private fb: FormBuilder) { }

  buildForm():FormGroup {
    return this.fb.group({
      sommePayerMensuellement: new FormControl(
        {
          value: '',
          disable: false
        },
        {
          validators: [

          ],
          updateOn: 'change'
        }
      ),
      sommePayerAnnuellement: new FormControl(
        {
          value: '',
          disable: false
        },
        {
          validators: [

          ],
          updateOn: 'change'
        }
      ),
    })

  }
}
