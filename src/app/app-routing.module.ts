import { RouterModule, Routes } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":id",
    component: HomeComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}