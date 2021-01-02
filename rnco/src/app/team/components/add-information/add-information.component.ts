import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private informationsService: InformationService,
    private router: Router) { }
informationsForm: FormGroup;
informations: Informations[];

  ngOnInit(): void {
   this.informationsForm = this.informationsServiceFormulaire.buildForm();
   let token = sessionStorage.getItem('userConnectRNCO');
   if (!token) {
     this.router.navigate(['/login'])
     
   }
  }

  createInformations() {
    let result = this.informationsForm.getRawValue();
    console.log(result)
    this.informationsService.createInformations(result).subscribe(
      (data: any) => {
        this.informations = data;
      }
    )
  }

}
