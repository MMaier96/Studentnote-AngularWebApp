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
import {Student} from "../objects/student";
import {Note} from "../objects/note";
import {Router} from "@angular/router";

@Component({
	selector: 'app-cnote',
	templateUrl: './cnote.component.html',
	styleUrls: ['./cnote.component.css','./starrating.css'],
	providers: [DataService]
})

export class CnoteComponent implements OnInit {
	//Attributes
		student: Student;
		students: Student[] = [];
		selected: boolean = true;

		constructor(private dataService: DataService, private router: Router) {		//inject dataService and router
			this.student = dataService.getStudentForNote();							//get the student for which a note should be created
			this.students = dataService.getStudents();								//get all students from persistent data
			
			if(this.student == null) this.selected = false;							//set wheather a student is selected to create a note
			
			dataService.resetStudentForNote();										//remove selected student from persistent data	
		}

	//Functions
		/*
		 * validates data from inputs
		 * saves a created note to the persistent data
		 */
		saveNote(title, message, stars, event){
			//prevent default event (page won't reload on submit)
				event.preventDefault();

			//calculates the rating from the inputs
				let rating = 5;

				for(let elm of stars.getElementsByTagName("input")){	//iterates all inputs from the div.stars (#stars)
					if(elm.checked == true) break;						//if current element is checked, break the loop
					else rating--;										//else decrement the rating by one
				}
				
			//create a new instance of a note
				let teacher = this.dataService.getCurrentUser().forename + " " + this.dataService.getCurrentUser().surname + " ";
				let newNote = new Note(title.value, message.value, rating, teacher );
			
			//create array if notes is null, push to array otherwise
				if(this.student.notes == null){
					this.student.notes = [newNote];
				}else{
					this.student.notes.push(newNote);
				}

			//search for the student in persistent data and add the note
				for(let stud of this.students){							//iterate throught all students
					if(stud.forename == this.student.forename){			//check equality of forename of transient and persistent student
						if(stud.surname == this.student.surname){		//check equality of surname of transient and persistent student
							
							//create array if notes is null, push to array otherwise
								if(stud.notes == null)
									stud.notes = [newNote];
								else
									stud.notes.push(newNote);
							
							break; //break the loop, because the note is already added
						}
					}
				}
			
			//synchronize the persistent students with the transient ones
				this.dataService.setStudents(this.students);
				
			//navigate to the dashboard
				this.router.navigate(['/','dashboard']);
		}

	/*
	 * method is called when the component is initialized 
	 */
	ngOnInit(){
		console.log("CreateNoteComponent successfully initialized!");
	}
}
