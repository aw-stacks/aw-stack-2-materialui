import "../../node_modules/material-design-lite/dist/material.min.css";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { MaterialModule } from "@angular/material";

import { rootRouterConfig } from "./router/app.routes";
import { LayoutComponent } from "./pages/layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import "./styles/common.less";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    MaterialModule.forRoot()
  ],
  bootstrap: [LayoutComponent],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }]
})

export class AppModule { }
