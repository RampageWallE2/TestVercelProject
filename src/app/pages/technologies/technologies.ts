import { Component } from '@angular/core';
import { PORTFOLIO, Technology } from '../../core/data/portfolio.data';

interface TechnologyGroup {
  category: Technology['category'];
  description: string;
}

@Component({
  standalone: true,
  selector: 'app-technologies',
  templateUrl: './technologies.html',
})
export class Technologies {
  readonly portfolio = PORTFOLIO;

  readonly groups: TechnologyGroup[] = [
    {
      category: 'Frontend',
      description: 'Interfaces, componentes y experiencias web responsive.',
    },
    {
      category: 'Backend',
      description: 'APIs, autenticación, servicios y lógica de negocio.',
    },
    {
      category: 'Base de datos',
      description: 'Persistencia, consultas y modelado de información.',
    },
    {
      category: 'DevOps',
      description: 'Entornos, control de versiones y despliegue.',
    },
    {
      category: 'Datos',
      description: 'Procesamiento, análisis y fundamentos predictivos.',
    },
  ];

  technologiesByCategory(category: Technology['category']): Technology[] {
    return this.portfolio.technologies.filter(
      (technology) => technology.category === category,
    );
  }
}
