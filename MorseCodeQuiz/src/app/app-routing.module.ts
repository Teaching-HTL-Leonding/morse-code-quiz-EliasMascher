import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecodeComponent } from './decode/decode.component';
import { EncodeComponent } from './encode/encode.component';

const routes: Routes = [
  {path:'', redirectTo:'encode', pathMatch:'full'},
  {path:'encode',component:EncodeComponent},
  {path:'decode',component:DecodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
