import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillPieComponent } from './skill-pie/skill-pie.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SkillPieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'portfolio';
}
