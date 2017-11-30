import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app-header';
import { MatchComponent } from './match/app-match';
import { ListMatchesComponent } from './listmatches/app-listmatches';
import { MatchDetailsComponent } from './matchdetails/app-matchdetails';
import { AppRoutingModule } from './app-routes';
import { MatchDataService } from './app-dataservice';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/app-footer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchComponent,
    ListMatchesComponent,
    MatchDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [MatchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
