import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
// import { MatchComponent } from './match/app-match';

@Injectable()
export class MatchDataService {
    constructor(public http: Http) { }

    getAllActiveMatches(): Observable<any> {
        return this.http.get('http://localhost:3000/api/match/finished/false')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error));
    }

    getOneMatch(id: any): Observable<any> {
        return this.http.get('http://localhost:3000/api/match/' + id).map(res => res.json());
    }
}
