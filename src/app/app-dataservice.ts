import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { MatchComponent } from './match/app-match';
import { ListMatchesComponent } from './listmatches/app-listmatches';

@Injectable()
export class MatchDataService {
    constructor(public http: Http) { }

    getAllActiveMatches(): Observable<any> {
        let matches: any;
        matches = this.http.get('http://localhost:3000/api/match/finished/false').map(res => res.json());
        return matches;
    }

    getOneMatch(id: any): Observable<any> {
        let match: any;
        match = this.http.get('http://localhost:3000/api/match/' + id).map(res => res.json());
        return match;
    }
}
