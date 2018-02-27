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

import { Component, OnInit } from '@angular/core';
import {DataService} from "../Services/data.service";
import {Router} from "@angular/router";
import {Student} from "../objects/student";
import {Class} from "../objects/class";
import {Teacher} from "../objects/teacher";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css','../routing.css'],
	providers: [DataService]
})

export class DashboardComponent implements OnInit {
	//Attributes
		user: Teacher;
		students: Student[];
		classes: Class[];
		isClassTeacher: boolean = false;

	constructor(private dataservice: DataService, private router: Router){		//inject dataService and router
		//set transient data to the persistent data
			this.user = dataservice.getCurrentUser();
			this.classes = dataservice.getClasses();

		if(this.classes == null){
				return;
		}
		
		//search for the teacher and set the students and the boolean wheather 
		//the teacher is assigned to a class
			for(let c of this.classes){														//iterates trought all classes
				if(c.classTeacher == (this.user.forename + " " + this.user.surname)){		//check if the current teacher fits to a class
					this.students = c.students;												//set the students to the teacher
					this.isClassTeacher = true;												//the teacher is assigned to a class
				}
			}
	}

	//Functions
		/*
		 * opens the createNote dialog for the selected student
		 */
		createNote(index){
			this.dataservice.setStudentForNote(this.students[index]);			//set the selected student for the createNote dialog
			this.router.navigate(['/','cnote']);								//navigate to the createNote dialog
		}

		/*
		 * opens the showProfile dialog for the selected student
		 */
		showProfile(index){
		this.dataservice.setStudentForProfile(this.students[index]);			//set the selected student for the showProfile dialog
		this.router.navigate(['/','sprofile']);									//navigate to the showProfile dialog
		}

		/*
		 * method is called when the component is initialized 
		 */
		ngOnInit() {
			console.log("DashboardComponent successfully initialized!");
		}

}
