import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MatchComponent } from './match/app-match';

@Injectable()
export class MatchDataService {
    constructor(public http: Http) { }

    getAllMatches(): Observable<any> {
        return this.http.get('http://localhost:3000/api/match').map(res => res.json());
    }

    getOneMatch(id: number): Observable<MatchComponent> {
        return this.http.get('http://localhost:3000/api/match/' + id).map(res => res.json());
    }
}
