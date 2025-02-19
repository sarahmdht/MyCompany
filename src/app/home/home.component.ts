import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
