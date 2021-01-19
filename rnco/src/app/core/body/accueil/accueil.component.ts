import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';
import { Subscription } from 'rxjs';
import { SimulateurService } from '../services/simulateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  constructor(private simulateurService: SimulateurService) {
   }

   simulateurForm: FormGroup;
   simulateurSubscription: Subscription;
   coutAnnuelEnergitique: number;
   coutPacAirAirMensuel: Number;
   coutPacAirAirAnnuel: Number;
   coutPacAirEauMensuel: Number;
   coutPacAirEauAnnuel: Number;
   economieAnnuelAirAir: number;
   economieAnnuelAirEau: number;

  ngOnInit() {
    this.simulateurForm = this.simulateurService.buildForm();
    this.coutAnnuelEnergitique = 0;
    this.coutPacAirAirMensuel = 0;
    this.coutPacAirAirAnnuel = 0;
    this.coutPacAirEauMensuel = 0;
    this.coutPacAirEauAnnuel = 0;
    this.simulateurForm.get('sommePayerMensuellement').setValue(0)
    this.simulateurForm.get('sommePayerMensuellement').valueChanges.subscribe(
        (data: any) => {
          this.coutAnnuelEnergitique = data * 12;
          this.coutPacAirAirMensuel = data / 4;
          this.coutPacAirAirAnnuel = data / 4 * 12;
          this.coutPacAirEauMensuel = data / 3;
          this.coutPacAirEauAnnuel = data / 3 * 12;
          this.economieAnnuelAirAir = this.coutAnnuelEnergitique +- this.coutPacAirAirAnnuel;
          this.economieAnnuelAirEau = this.coutAnnuelEnergitique +- this.coutPacAirEauAnnuel;
        }
    )
  }

 calculSimulateur() {
alert(this.simulateurForm.get('sommePayerMensuellement').value)
 }
}
