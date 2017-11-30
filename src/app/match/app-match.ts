import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { MatchDataService } from '../app-dataservice';
import { Observable } from 'rxjs/Observable';



@Component({
    selector: 'app-match',
    templateUrl: 'app-match.html',
    styleUrls: ['app-match.css']
})

export class MatchComponent implements OnInit {
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

    constructor(http: Http, private route: ActivatedRoute, private mds: MatchDataService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.obs = this.mds.getOneMatch(this.id);
            this.obs.subscribe(response => {
                this.id = response.id;
                this.score = response.score;
                this.date = response.date;
                this.team1 = response.team1;
                this.team2 = response.team2;
                this.stadium = response.stadium;
                this.finished = response.finished;
                this.events = response.events;
            });
          });
    }

    /*getOneMatch(id): void {
        this.obs = this.mds.getOneMatch(id);
        this.obs.subscribe(response => {
            this.id = response.id;
            this.score = response.score;
            this.date = response.date;
            this.team1 = response.team1;
            this.team2 = response.team2;
            this.stadium = response.stadium;
            this.finished = response.finished;
            this.events = response.events;
        });
    }*/
}
