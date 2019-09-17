import { Component } from '@angular/core';
import { PwaService } from './shared/services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stestex';

  constructor(private pwaService: PwaService) {}

}
