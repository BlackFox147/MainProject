import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { AccountComponent } from './components/account.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { FormsModule } from '@angular/forms';
import { BuildInstructionComponent } from './components/buildInstruction.component';
import { Instruction } from './Model/instruction';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';


import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';


//import { LoginUser } from './Model/login';
import { UserService } from './Service/user.service'


@NgModule({
    imports: [CommonModule, BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, FormsModule, DragulaModule ],
    declarations: [AppComponent, UserComponent, HomeComponent, AccountComponent,
        LoginComponent, RegisterComponent, BuildInstructionComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]

})
export class AppModule { }
