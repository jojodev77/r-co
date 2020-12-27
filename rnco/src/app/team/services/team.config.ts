import { Injectable } from '@angular/core';

/**rxjs */
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  

  
export class TeamConfigService {

    isConnectAdmin = new Subject<boolean>()
    isConnectSuperAdmin = new Subject<boolean>()
    isConnectGestionnaire = new Subject<boolean>()
    isConnectSuperAgent = new Subject<boolean>()

    guardConnectToAcces() {}

}