import { MatchComponent } from '../match/app-match';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchDataService } from '../app-dataservice';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './app-matchdetails.html',
  styleUrls: ['./app-matchdetails.css']
})

export class MatchDetailsComponent implements OnInit {
  public match: MatchComponent;
  public id;
  public score;
  public date;
  public team1;
  public team2;
  public stadium;
  public finished;
  public events;
  public obs: Observable<any>;
  public sub: any;
  public today = new Date();
  public minutes;

  constructor(http: Http, private route: ActivatedRoute, private mds: MatchDataService) { }

  getOneMatch(id): void {
    this.obs = this.mds.getOneMatch(id);
    this.obs.subscribe(response => this.match = response.matches);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getOneMatch(this.id);
      });
    }
}

