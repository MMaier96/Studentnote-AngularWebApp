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
import {Note} from "../objects/note";
import {Student} from "../objects/student";
import {Router} from "@angular/router";

@Component({
	selector: 'app-enote',
	templateUrl: './enote.component.html',
	styleUrls: ['./enote.component.css','./starrating.css'],
	providers: [DataService]
})


export class EnoteComponent implements OnInit {
	//Attributes
		student: Student;
		students: Student[];
		index: number;
		selected: boolean = true;
		note: Note;

	constructor(private dataService: DataService, private router: Router){  	//inject dataService and router
		//get persistent data and save it to the transient
			this.students = dataService.getStudents();
			this.student = dataService.getStudentForEditNote();
			this.index = dataService.getIndexForNoteEdit();
			this.note = this.student.notes[this.index];
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

			//search for the student and replace the note
				for(let stud of this.students){							//iterate throught all students
					if(stud.forename == this.student.forename){			//check equality of forename of transient and persistent student
						if(stud.surname == this.student.surname){		//check equality of surname of transient and persistent student
							stud.notes[this.index] = newNote;			//replace the note	
						}
					}
				}

			//synchronize students persistent to transient data
				this.dataService.setStudents(this.students);
				
			//navigate to selected students profile and reload page
				this.router.navigate(['/','sprofile']);
				window.location.reload();
		}

		/*
		 * method is called when the component is initialized 
		 */
		ngOnInit() {
			console.log("EditNoteComponent successfully initialized!");
		}

}
