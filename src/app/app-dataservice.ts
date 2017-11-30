import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
    /*   return this.http.get('http://localhost:3000/api/match/finished/false').map(res => res.json());
    }*/

    getOneMatch(id: any): Observable<MatchComponent> {
        let match: any;
        match = this.http.get('http://localhost:3000/api/match/' + '5a1eb710e688a41fdc2f7a92').map(res => res.json());
        return match;
    }
}
