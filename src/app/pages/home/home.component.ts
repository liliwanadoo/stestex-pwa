import { Component, OnInit } from '@angular/core';
import { PwaService } from 'src/app/shared/services/pwa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public pwaService: PwaService,
              private router: Router) {}

  ngOnInit() {
  }

  public dummy(): void {
    this.pwaService.askUserToUpdate();
    this.router.navigate(['']);
  }

  installPwa(): void {
    this.pwaService.promptEvent.prompt();
  }
}
