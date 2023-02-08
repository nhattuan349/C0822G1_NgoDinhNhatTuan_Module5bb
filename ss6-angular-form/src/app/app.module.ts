import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './practice/todo/todo.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateRegistrationFormComponent } from './excercise/create-registration-form/create-registration-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateRegistrationFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
