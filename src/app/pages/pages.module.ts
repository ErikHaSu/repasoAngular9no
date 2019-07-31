import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { ImgComponent } from './img/img.component';
import { ImagenComponent } from './img/imagen/imagen.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostsComponent,
    PostComponent,
    ImgComponent,
    ImagenComponent
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ImgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
