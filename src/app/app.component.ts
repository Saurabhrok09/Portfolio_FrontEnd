import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillPieComponent } from './skill-pie/skill-pie.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SkillPieComponent,
    FooterComponent,
    HeaderComponent,
    

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'portfolio';
}
