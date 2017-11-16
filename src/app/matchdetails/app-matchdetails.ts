import { Component } from '@angular/core';
import { MatchComponent } from '../match/app-match';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './app-matchdetails.html',
  styleUrls: ['./app-matchdetails.css']
})

export class MatchDetailsComponent {
    private match: MatchComponent;
}
