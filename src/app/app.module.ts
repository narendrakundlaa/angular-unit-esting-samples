import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common-components/login/login.component';
import { RegisterComponent } from './common-components/register/register.component';
import { DashBoardComponent } from './common-components/dash-board/dash-board.component';
import { InputComponent } from './shared-components/input/input.component';
import { AlertComponent } from './shared-components/alert/alert.component';
import { DialogBoxComponent } from './shared-components/dialog-box/dialog-box.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { PaginationComponent } from './shared-components/pagination/pagination.component';
import { AccordianComponent } from './shared-components/accordian/accordian.component';
import { SearchComponent } from './shared-components/search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { CreateFormComponent } from './form/create-form/create-form.component';
import { ListComponent } from './form/list/list.component';
import { DisplayComponent } from './form/display/display.component';
import { TableDataComponent } from './shared-components/table-data/table-data.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashBoardComponent,
    InputComponent,
    AlertComponent,
    DialogBoxComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    AccordianComponent,
    SearchComponent,
    PageNotFoundComponent,
    CreateFormComponent,
    ListComponent,
    DisplayComponent,
    TableDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
