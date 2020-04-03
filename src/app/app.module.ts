import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { GolfRoutingModule } from './golf-game/golf-routing.module';
import { GolfModule } from './golf-game/golf.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from './shared/shared/shared.module';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        GolfRoutingModule,
        AppRoutingModule,
        GolfModule,
        SharedModule,
        StorageServiceModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
