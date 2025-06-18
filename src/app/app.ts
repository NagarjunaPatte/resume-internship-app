import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { FooterComponent } from './components/footer/footer.component';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,FooterComponent,Hero,Projects,Skills,FooterComponent,Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
}
