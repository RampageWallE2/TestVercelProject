import { Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../core/data/portfolio.data';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home implements OnDestroy {
  readonly portfolio = PORTFOLIO;
  readonly phrase = signal(PORTFOLIO.heroPhrases[0]);

  private phraseIndex = 0;
  private readonly timer = window.setInterval(() => {
    this.phraseIndex =
      (this.phraseIndex + 1) % this.portfolio.heroPhrases.length;
    this.phrase.set(this.portfolio.heroPhrases[this.phraseIndex]);
  }, 2600);

  ngOnDestroy(): void {
    window.clearInterval(this.timer);
  }
}
