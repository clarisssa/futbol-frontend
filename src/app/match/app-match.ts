import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MatchDataService } from '../app-dataservice';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-match',
    templateUrl: 'app-match.html',
    styleUrls: ['app-match.css']
})

export class MatchComponent implements OnInit {
    public _id: string;
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

    getOneMatch(_id): void {
        this.obs = this.mds.getOneMatch(_id);
        this.obs.subscribe(response => {
            this._id = String(response._id);
            this.score = response.score;
            this.date = response.date;
            // this.minutes = this.today.getTime() - this.date.getTime();
            this.team1 = response.team1;
            this.team2 = response.team2;
            this.stadium = response.stadium;
            this.finished = response.finished;
            this.events = response.events;
        });
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this._id = String(+params['_id']);
            this.getOneMatch(this._id);
            /*this.obs.subscribe(response => {
                this.id = response._id;
                this.score = response.score;
                this.date = response.date;
                this.minutes = this.today.getTime() - this.date.getTime();
                this.team1 = response.team1;
                this.team2 = response.team2;
                this.stadium = response.stadium;
                this.finished = response.finished;
                this.events = response.events;
            });*/
        });
    }
}
