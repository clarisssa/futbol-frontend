import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatchComponent } from './match/app-match';
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
    { path: 'match/:_id',
      component: MatchComponent,
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
