import { Component } from '@angular/core';
import { PORTFOLIO } from '../../core/data/portfolio.data';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class Contact {
  readonly portfolio = PORTFOLIO;
}
