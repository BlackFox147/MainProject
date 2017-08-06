import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { AccountComponent } from './components/account.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { BuildInstructionComponent } from './components/buildInstruction.component';
import { StepComponent } from './components/step.component';
import { ViewStepComponent } from './components/viewStep.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'account', component: AccountComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'buildInstruction', component: BuildInstructionComponent },
    { path: 'step', component: StepComponent },
    { path: 'viewStep', component: ViewStepComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);