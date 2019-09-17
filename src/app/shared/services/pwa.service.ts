import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
 public promptEvent: any;

  constructor(private swUpdate: SwUpdate
             ) {
    swUpdate.available.subscribe(event => {
      if (this.askUserToUpdate()) {
        window.location.reload();
      }
    });
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
   }

   public askUserToUpdate(): boolean {
    console.log('PwaService :: Accept updates');
    return true;
   }
}
