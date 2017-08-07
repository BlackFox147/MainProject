import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { HomeComponent } from './components/home.component';
import { AccountComponent } from './components/account.component';

import { RegisterComponent } from './components/register.component';
import { StepComponent } from './components/step.component';
import { FormsModule } from '@angular/forms';
import { BuildInstructionComponent } from './components/buildInstruction.component';
import { Instruction } from './Model/instruction';
import { ViewStepComponent } from './components/viewStep.component';
import { ViewInstructionComponent } from './components/viewInstruction.component';
import { ViewUserComponent } from './components/viewUser.component';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { MarkdownModule } from 'angular2-markdown';
//import { AutosizeModule } from 'angular2-autosize/src/autosize.directive';

//import { AutosizeModule } from 'angular2-autosize';
//import { Ng2ImageGalleryModule} from 'ng2-image-gallery';

import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Autosize } from 'angular2-autosize/angular2-autosize';

import { UserService } from './Service/user.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
    imports: [CommonModule, BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, FormsModule, DragulaModule,
        MarkdownModule.forRoot(), SlimLoadingBarModule.forRoot()],
    declarations: [AppComponent, HomeComponent, AccountComponent,
         RegisterComponent, BuildInstructionComponent, StepComponent, Autosize,
        ViewStepComponent, ViewInstructionComponent, ViewUserComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]

})
export class AppModule { }
