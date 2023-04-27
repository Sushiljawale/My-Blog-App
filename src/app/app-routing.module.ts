import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { NewPostComponent } from './pages/new-post/new-post.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'category' ,component:SingleCategoryComponent },
  {path: 'post' ,component:SinglePostComponent },

  {path: 'about' ,component:AboutUsComponent },
  {path: 'term-condition' ,component:TermsAndConditionComponent },
  {path: 'contact' ,component:ContactUsComponent},

  {path: 'subscription' ,component:SubscriptionFormComponent},
  {path: 'new-post' ,component:NewPostComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

