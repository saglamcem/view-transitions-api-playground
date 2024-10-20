import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {map} from "rxjs";
import {artists} from "../artists-data";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AsyncPipe, JsonPipe, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    RouterLink,
    AsyncPipe,
    NgIf,
    JsonPipe,
    NgStyle
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  private activatedRoute = inject(ActivatedRoute);

  selectedArtistId$ = this.activatedRoute.params
    .pipe(
      map(params => params["id"]),
    )

  artist$ = this.selectedArtistId$
    .pipe(
      map(id => artists.find(artist => artist.id === id)),
    )
}
