import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MatchDataService } from '../app-dataservice';
import { MatchComponent } from '../match/app-match';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-listmatches',
  templateUrl: './app-listmatches.html',
  styleUrls: ['./app-listmatches.css']
})

export class ListMatchesComponent implements OnInit {

  public matches: MatchComponent[];
  public obs: Observable<any>;
  public selectedMatch: MatchComponent;

  constructor(http: Http, protected mds: MatchDataService) { }

  getAllActiveMatches(): void {
    this.obs = this.mds.getAllActiveMatches();
    this.obs.subscribe(response => this.matches = response.results);
  }

  onSelect(match: MatchComponent): void {
    this.selectedMatch = match;
  }

  ngOnInit() {
    this.getAllActiveMatches();
  }
}
