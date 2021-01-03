import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FicheClientFormService } from '../../services/fiche-client-form.service';
import  jspdf  from 'jspdf';
import html2canvas from 'html2canvas';  

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

  captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 895;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }   

}
