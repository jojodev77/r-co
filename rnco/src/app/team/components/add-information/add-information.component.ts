import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Informations } from '../../models/informations.interface';

/** services */
import { InformationFormulaireService } from '../../services/information-formulaire.service';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-add-information',
  templateUrl: './add-information.component.html',
  styleUrls: ['./add-information.component.scss']
})
export class AddInformationComponent implements OnInit {

  constructor(private informationsServiceFormulaire: InformationFormulaireService,
    private informationsService: InformationService) { }
informationsForm: FormGroup;
informations: Informations[];

  ngOnInit(): void {
   this.informationsForm = this.informationsServiceFormulaire.buildForm();
  }

  createInformations() {
    let result = this.informationsForm.getRawValue();
    this.informationsService.createInformations(result).subscribe(
      (data: any) => {
        this.informations = data;
      }
    )
  }

}
