import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomEnterComponent } from './components/room-enter/room-enter.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomUpdateComponent } from './components/room-update/room-update.component';


const routes: Routes = [
  
  {
    path: "new",
    component: CreateRoomComponent
  },
  {
    path: "rooms",
    component: RoomListComponent
  },
  {
    path: "details/:id",
    component: RoomDetailsComponent
  },
  {
    path: "update/:id",
    component: RoomUpdateComponent
  },
  {
    path: "enter/:id",
    component: RoomEnterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
