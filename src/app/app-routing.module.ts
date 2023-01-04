import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { HomeComponent } from './pages/home-page/home.component';
import { ProfileComponent } from './pages/profile-page/profile.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { PlayComponent } from './pages/play-page/play.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'play/:gameCode',
    component: PlayComponent,
  },
  {
    path: 'play',
    component: CreateGameComponent,
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: !isIframe ? 'enabled' : 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
