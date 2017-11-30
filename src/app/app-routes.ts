import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatchDetailsComponent } from './matchdetails/app-matchdetails';
import { ListMatchesComponent} from './listmatches/app-listmatches';

export const routes: Routes = [
    { path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: ListMatchesComponent,
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
