import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SubmenuComponent } from './submenu/submenu.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    SubmenuComponent,
    MenuComponent
  ],
  exports: [
    AngularMaterialModule,
    PrimeNgModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SubmenuComponent,
    MenuComponent
  ]
})
export class ShareModule { }
