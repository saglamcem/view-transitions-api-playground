import {Component} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, startWith} from "rxjs";
import {artists} from "../artists-data";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatFooterRow} from "@angular/material/table";
import {RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    MatCardModule,
    MatButton,
    MatFooterRow,
    RouterLink,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatLabel
  ],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent {
  artistSearchInput = new FormControl('');

  filteredArtists$ = this.artistSearchInput.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged(),
    map((searchValue) => {
      if (searchValue == null || searchValue?.toString().trim().length === 0) return artists;
      return artists.filter(artist => artist.name.toLowerCase().includes(searchValue.toLowerCase()))
    })
  )
}
