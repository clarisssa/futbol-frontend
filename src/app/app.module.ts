import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app-header';
import { MatchComponent } from './match/app-match';
import { ListMatchesComponent } from './listmatches/app-listmatches';
import { MatchDetailsComponent } from './matchdetails/app-matchdetails';
import { AppRoutingModule } from './app-routes';
import { MatchDataService } from './app-dataservice';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchComponent,
    ListMatchesComponent,
    MatchDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MatchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
