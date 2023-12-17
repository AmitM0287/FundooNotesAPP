import { Component } from '@angular/core';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';


@Component({
	selector: 'notes-app',
	templateUrl: './notes-app.component.html',
	styleUrls: ['./notes-app.component.scss']
})
export class NotesAppComponent {
	/* class variables */
	isSideMenuEnabled: boolean = false;

	openSideMenu() {
		this.isSideMenuEnabled = !this.isSideMenuEnabled;
	}
}
