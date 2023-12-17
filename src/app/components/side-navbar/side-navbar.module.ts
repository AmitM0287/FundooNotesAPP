import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './side-navbar.component';


@NgModule({
	declarations: [
		SideNavbarComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [ 
		SideNavbarComponent,
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
	]
})
export class SideNavbarModule { }
