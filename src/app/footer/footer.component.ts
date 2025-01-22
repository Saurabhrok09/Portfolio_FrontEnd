import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
