import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AngularMaterialModule } from "../angular-material.moduel";
import { CommonModule } from "../../../node_modules/@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [AngularMaterialModule, CommonModule, FormsModule, AuthRoutingModule]
})
export class AuthModule {}
