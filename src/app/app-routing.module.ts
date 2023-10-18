import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AdminAddAlbumScreenComponent } from './screens/admin-add-album-screen/admin-add-album-screen.component';

const routes: Routes = [
    {
      // /
      path: "",
      component: HomeScreenComponent
    },
    {
      // /admin/add-album
      path: "admin/add-album",
      component: AdminAddAlbumScreenComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
