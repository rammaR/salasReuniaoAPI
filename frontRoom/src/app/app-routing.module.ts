import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { RoomListComponent } from './components/room-list/room-list.component';


const routes: Routes = [
  {
    path: "room",
    component: RoomListComponent
  },
  {
    path: "new",
    component: CreateRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
