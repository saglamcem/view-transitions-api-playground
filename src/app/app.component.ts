import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AsyncPipe, NgIf} from "@angular/common";
import {ArtistListComponent} from "./artist-list/artist-list.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, ArtistListComponent, MatToolbar, MatIcon, MatIconButton, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  router = inject(Router);
  selectedPage$ = this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url),
    )
}
