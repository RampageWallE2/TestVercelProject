import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio | Piero Noa',
    loadComponent: () =>
      import('./pages/home/home').then((component) => component.Home),
  },
  {
    path: 'perfil',
    title: 'Perfil y estudios | Piero Noa',
    loadComponent: () =>
      import('./pages/profile/profile').then((component) => component.Profile),
  },
  {
    path: 'tecnologias',
    title: 'Tecnologías | Piero Noa',
    loadComponent: () =>
      import('./pages/technologies/technologies').then(
        (component) => component.Technologies,
      ),
  },
  {
    path: 'proyectos',
    title: 'Proyectos | Piero Noa',
    loadComponent: () =>
      import('./pages/projects/projects').then(
        (component) => component.Projects,
      ),
  },
  {
    path: 'contacto',
    title: 'Contacto | Piero Noa',
    loadComponent: () =>
      import('./pages/contact/contact').then((component) => component.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
