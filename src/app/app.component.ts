import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'test-app-17';
  currentRoute: any = ''

  constructor(
    private readonly router: Router
  ){}

goToProduits() {
  this.currentRoute = ('produits')
  this.router.navigateByUrl('/produits')
  }

goToHome() {
  this.currentRoute = ('home')
  this.router.navigateByUrl('/home')
  }
}
