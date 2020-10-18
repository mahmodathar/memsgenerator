import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ColorChromeModule } from 'ngx-color/chrome';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MgenaratorComponent } from './mgenarator/mgenarator.component';
import { SeeexampleComponent } from './seeexample/seeexample.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MgenaratorComponent,
    SeeexampleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorChromeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
