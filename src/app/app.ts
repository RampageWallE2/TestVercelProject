import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnDestroy {
  readonly brandName = 'NUEVO PROYECTO';
  readonly contactEmail = 'contacto@tupagina.com';
  readonly estimatedLaunch = 'Próximamente';

  readonly messages = [
    'Diseñando una experiencia clara',
    'Preparando nuestro contenido',
    'Construyendo cada detalle',
    'Optimizando la nueva plataforma',
  ];

  readonly currentMessage = signal(this.messages[0]);
  readonly progress = signal(42);

  private messageIndex = 0;
  private progressDirection = 1;

  private readonly messageTimer = window.setInterval(() => {
    this.messageIndex = (this.messageIndex + 1) % this.messages.length;
    this.currentMessage.set(this.messages[this.messageIndex]);
  }, 2600);

  private readonly progressTimer = window.setInterval(() => {
    const nextValue = this.progress() + this.progressDirection;

    if (nextValue >= 78) {
      this.progressDirection = -1;
    }

    if (nextValue <= 42) {
      this.progressDirection = 1;
    }

    this.progress.set(nextValue);
  }, 85);

  ngOnDestroy(): void {
    window.clearInterval(this.messageTimer);
    window.clearInterval(this.progressTimer);
  }
}
