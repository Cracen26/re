import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RssListingComponent } from './components/rss-listing/rss-listing.component';

const routes: Routes = [
  {path:'rss-list',component:RssListingComponent},
  {path:'',redirectTo:'/rss-list',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
