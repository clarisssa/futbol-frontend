import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatchDetailsComponent } from './matchdetails/app-matchdetails';

export const routes: Routes = [
    { path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    { path: 'details',
      component: MatchDetailsComponent,
    },
    /*{ path: '**',
    component: PageNotFoundComponent
    }*/
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule { }
