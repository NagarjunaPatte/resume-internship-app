import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
menuOpen = false;
constructor(private router: Router) {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
  this.menuOpen = false;
}
goHome() {
  this.router.navigate(['/']).then(() => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
}
