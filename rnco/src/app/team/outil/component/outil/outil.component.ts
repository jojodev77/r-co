import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FicheClientComponent } from '../fiche-client/fiche-client.component';

@Component({
  selector: 'app-outil',
  templateUrl: './outil.component.html',
  styleUrls: ['./outil.component.scss']
})
export class OutilComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    let errorMsg = (+sessionStorage.getItem('errorHttp'));
    if (errorMsg === 401) {
      this.router.navigate(['./collaborateurs'])
    }
  }

  openDialogFicheClient() {
    const dialogRef = this.dialog.open(FicheClientComponent, {
      autoFocus: false,
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
