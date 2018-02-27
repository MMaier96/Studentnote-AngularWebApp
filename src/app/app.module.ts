/*	=========================================
 *	==	StudentNote WebEngeneering Project ==
 *	=========================================
 *
 *	Group:			Marcel Maier, Florian Keilhofer, Lukas Weber, Peter Fischer
 *	Developer:		Marcel Maier
 *	Mail:			mar.maier.16@lehre.mosbach.dhbw.de
 *	Created:		13th-July-2017
 *	Finished:		20th-July-2017
 *	Created for: 	DHBW - Project - 2nd Semester 
 *	
 *	Licenses:
 *		Fonts:    - Font Awesome 4.2.0 by @davegandy - http://fontawesome.io - @fontawesome
 *				  - Google Open Fonts (Lato, Roboto)
 *
 *		CSS:	  - StarRating: FreeToUseLicense (MIT) from cssscript.com
 * 							  
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { TeacherComponent } from './teacher/teacher.component';
import {routing} from './app.routing';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { CnoteComponent } from './cnote/cnote.component';
import { SprofileComponent } from './sprofile/sprofile.component';
import { EnoteComponent } from './enote/enote.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    TeacherComponent,
    StudentsComponent,
    ClassesComponent,
    LoginComponent,
    CnoteComponent,
    SprofileComponent,
    EnoteComponent,
  ],
  imports: [
    BrowserAnimationsModule,BrowserModule,FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
