import { Component } from '@angular/core';

@Component({
    selector: 'app-match',
    templateUrl: 'app-match.html',
    styleUrls: ['app-match.css']
})

export class MatchComponent {
    private id;
    private score;
    private date;
    private team1;
    private team2;
    private stadium;
    private finished;
    private events;
}
