import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponentComponent } from './screens/home-screen-component/home-screen-component.component';
import { AddAlbumComponent } from './screens/add-album/add-album.component';

const routes: Routes = [
  {
    path:"",
    component:HomeScreenComponentComponent
  },
  {
    path:"admin/add-album",
    component:AddAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
