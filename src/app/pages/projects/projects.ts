import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO, ProjectStatus } from '../../core/data/portfolio.data';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
})
export class Projects {
  readonly portfolio = PORTFOLIO;

  statusClass(status: ProjectStatus): string {
    return status.toLowerCase().replaceAll(' ', '-');
  }
}
