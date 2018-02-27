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


import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {TeacherComponent} from './teacher/teacher.component';
import {ClassesComponent} from './classes/classes.component';
import {StudentsComponent} from './students/students.component';
import {CnoteComponent} from "./cnote/cnote.component";
import {SprofileComponent} from "./sprofile/sprofile.component";
import {EnoteComponent} from "./enote/enote.component";

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'cnote',
    component: CnoteComponent
  },
  {
    path: 'enote',
    component: EnoteComponent
  },
  {
    path: 'sprofile',
    component: SprofileComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
