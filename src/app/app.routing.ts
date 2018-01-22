// Importar componentes y módulos para el routing 
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { whoAmIComponent } from './whoAmI.component';
import { homeComponent } from './home.component';
import { serviceComponent } from './service.component';
import { contactComponent } from './contact.component';

// Configuración de las rutas
const appRoutes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'whoAmI', component: whoAmIComponent },
  { path: 'service', component: serviceComponent },
  { path: 'contact', component: contactComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot( appRoutes );
