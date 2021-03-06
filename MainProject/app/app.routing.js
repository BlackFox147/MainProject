"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var account_component_1 = require("./components/account.component");
var register_component_1 = require("./components/register.component");
var buildInstruction_component_1 = require("./components/buildInstruction.component");
var step_component_1 = require("./components/step.component");
var viewStep_component_1 = require("./components/viewStep.component");
var viewInstruction_component_1 = require("./components/viewInstruction.component");
var viewUser_component_1 = require("./components/viewUser.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'account', component: account_component_1.AccountComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'buildInstruction/:id', component: buildInstruction_component_1.BuildInstructionComponent },
    { path: 'step/:id', component: step_component_1.StepComponent },
    { path: 'viewStep/:id', component: viewStep_component_1.ViewStepComponent },
    { path: 'viewInstruction/:id', component: viewInstruction_component_1.ViewInstructionComponent },
    { path: 'viewUser/:id', component: viewUser_component_1.ViewUserComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map