import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms'; // <-- Importar FormsModule
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,    
    FormsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class ComponentsModule { }
