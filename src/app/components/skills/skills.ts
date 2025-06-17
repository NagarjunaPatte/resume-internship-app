import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
   animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.skill-title', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true }),
        query('.skill-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Skills implements OnInit {
  ngOnInit(): void {
  }

}
