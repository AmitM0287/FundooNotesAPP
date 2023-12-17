import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarModule } from '../side-navbar/side-navbar.module';
import { NotesAppComponent } from './notes-app.component';


@NgModule({
	declarations: [
		NotesAppComponent,
	],
	imports: [
		CommonModule,
		SideNavbarModule,
	],
	exports: [
		NotesAppComponent,
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
	]
})
export class NotesAppModule { }
