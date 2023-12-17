import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesAppComponent } from './components/notes-app/notes-app.component';

const routes: Routes = [
	{ path: 'notes', component: NotesAppComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
