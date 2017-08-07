"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./components/home.component");
var account_component_1 = require("./components/account.component");
var register_component_1 = require("./components/register.component");
var step_component_1 = require("./components/step.component");
var forms_2 = require("@angular/forms");
var buildInstruction_component_1 = require("./components/buildInstruction.component");
var viewStep_component_1 = require("./components/viewStep.component");
var viewInstruction_component_1 = require("./components/viewInstruction.component");
var viewUser_component_1 = require("./components/viewUser.component");
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var angular2_markdown_1 = require("angular2-markdown");
//import { AutosizeModule } from 'angular2-autosize/src/autosize.directive';
//import { AutosizeModule } from 'angular2-autosize';
//import { Ng2ImageGalleryModule} from 'ng2-image-gallery';
var common_2 = require("@angular/common");
var angular2_autosize_1 = require("angular2-autosize/angular2-autosize");
var user_service_1 = require("./Service/user.service");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [common_2.CommonModule, platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule, forms_2.FormsModule, ng2_dragula_1.DragulaModule,
                angular2_markdown_1.MarkdownModule.forRoot(), ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot()],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, account_component_1.AccountComponent,
                register_component_1.RegisterComponent, buildInstruction_component_1.BuildInstructionComponent, step_component_1.StepComponent, angular2_autosize_1.Autosize,
                viewStep_component_1.ViewStepComponent, viewInstruction_component_1.ViewInstructionComponent, viewUser_component_1.ViewUserComponent],
            providers: [{ provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }, { provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map