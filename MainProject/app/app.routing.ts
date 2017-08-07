import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home.component';
import { AccountComponent } from './components/account.component';

import { RegisterComponent } from './components/register.component';
import { BuildInstructionComponent } from './components/buildInstruction.component';
import { StepComponent } from './components/step.component';
import { ViewStepComponent } from './components/viewStep.component';
import { ViewInstructionComponent } from './components/viewInstruction.component';
import { ViewUserComponent } from './components/viewUser.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
   
    { path: 'account', component: AccountComponent },
   
    { path: 'register', component: RegisterComponent },
    { path: 'buildInstruction/:id', component: BuildInstructionComponent },
    { path: 'step/:id', component: StepComponent },
    { path: 'viewStep/:id', component: ViewStepComponent },
    { path: 'viewInstruction/:id', component: ViewInstructionComponent },
    { path: 'viewUser/:id', component: ViewUserComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);