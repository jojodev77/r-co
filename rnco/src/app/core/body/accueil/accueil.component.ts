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
   coutPacAirAir: Number;
   coutPacAirEau: Number;

  ngOnInit() {
    this.simulateurForm = this.simulateurService.buildForm();
    this.coutAnnuelEnergitique = 0;
    this.coutPacAirAir = 0;
    this.coutPacAirEau = 0;
    this.calculSimulateur()
    
  }

 calculSimulateur() {
//    this.simulateurSubscription = this.simulateurForm.get('sommePayerMensuellement').valueChanges.subscribe(
//   (data: any) => {
//     console.log(data)
//     this.coutAnnuelEnergitique = data * 12;
//     this.coutPacAirAir = data / 4;
//     this.coutPacAirEau = data / 3;
//   }
// )
console.log(this.simulateurForm.get('sommePayerMensuellement').value)
 }
}
