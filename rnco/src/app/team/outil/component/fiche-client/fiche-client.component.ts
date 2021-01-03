import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FicheClientFormService } from '../../services/fiche-client-form.service';

@Component({
  selector: 'app-fiche-client',
  templateUrl: './fiche-client.component.html',
  styleUrls: ['./fiche-client.component.scss']
})
export class FicheClientComponent implements OnInit {

  constructor(private ficheClientForm: FicheClientFormService) { }

  fiche_client_form: FormGroup;

  ngOnInit(): void {
    this.fiche_client_form = this.ficheClientForm.buildForm();
  }

}
