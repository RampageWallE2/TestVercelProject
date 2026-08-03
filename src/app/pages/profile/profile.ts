import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../core/data/portfolio.data';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
})
export class Profile {
  readonly portfolio = PORTFOLIO;
}
