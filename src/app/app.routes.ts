import {Routes} from '@angular/router';
import {ArtistListComponent} from "./artist-list/artist-list.component";
import {ArtistComponent} from "./artist/artist.component";

export const routes: Routes = [
  {path: 'artists', component: ArtistListComponent},
  {path: 'artists/:id', component: ArtistComponent},
  {path: '', redirectTo: 'artists', pathMatch: 'full'},
];
