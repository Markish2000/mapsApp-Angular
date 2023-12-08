// Angular
import { Component } from '@angular/core';

// Components
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-alone-page',
  imports: [CounterAloneComponent, SideMenuComponent],
  standalone: true,
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css'],
})
export class AlonePageComponent {
  constructor() {}
}
