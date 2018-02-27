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
import {Router} from "@angular/router";

@Component({
	selector: 'app-sprofile',
	templateUrl: './sprofile.component.html',
	styleUrls: ['./sprofile.component.css','./starrating.css'],
	providers: [DataService]
})

export class SprofileComponent implements OnInit {

	//Attributes
		students: Student[];
		student: Student;
		selected: boolean = true;
		averageRating: number;

	constructor(private dataService: DataService, private router: Router) {

		this.student = dataService.getStudentForProfile();
		this.students = dataService.getStudents();
		if(this.student == null)
			this.selected = false;
	

		//search for the real student by name
			for(let stud of this.students){
				if(stud.forename == this.student.forename){
					if(stud.surname == this.student.surname){
						this.student = stud;
					}
				}
			}
		
		//Calculate the averageRating for selected student
			this.calcAveragePoints();
	}

	/*
	 * 	calculates the average points for the actual student
	 */
	calcAveragePoints(){
		//initialize the rating counter variable
			let totalRating = 0;
		
		//iterate all notes from the student and add rating to counter
			for(let note of this.student.notes){
				totalRating += note.rating;
			}

		//divide counter trought amount of notes
			this.averageRating = totalRating / this.student.notes.length;
			if(Number.isNaN(this.averageRating)){
				this.averageRating = -1;
			}
			
		//round to two decimals (care incorrect rounding, but its not that important) **ERROR_REPORTED_AT_END_OF_DOC**
			this.averageRating = Math.round(this.averageRating * 100) / 100;
	}

	/*
	 * 	delete the selected note for the actual student
	 */
	deleteNote(index){
		//  remove one note a index of the array
			this.student.notes.splice(index, 1);
		
		//search for the the student from persistent data
			for(let stud of this.students){
				if(stud.forename == this.student.forename){
					if(stud.surname == this.student.surname){
						stud = this.student;
					}
				}
			}
			
		//synchronize persistent data with transient
			this.dataService.setStudents(this.students);
		
		//calculate the averageRating for selected student
			this.calcAveragePoints();
	}

	/*
	 * 	edit the selected note for the actual student
	 */
	editNote(index){
		//set the student and noteIndex for edit dialog
			this.dataService.setStudentForEditNote(this.student);
			this.dataService.setIndexForNoteEdit(index);

		//navigate to editNote dialog
			this.router.navigate(['/','enote']);
	}

	/*
	 * method is called when the component is initialized 
	 */
	ngOnInit() {
		console.log("ShowProfileComponent successfully initialized!");
	}
}
	
	
/*	  	============================================
 *		= ERROR REPORT FOR MATH ROUDNING IN CHROME =
 *		============================================
 *	
 *		> let x = 1.005;
 *			<|| undefined
 *	
 *		> x *= 100;
 *			<|| 100.49999999999999 
 *	
 *		> x = Math.round(x);
 *			<|| 100
 *		
 *		> x /= 100;
 *			<|| 1
 *			<|| (should be) 1.01
 *		
 *		
 *	====== Error for chrome version: Chrome/59.0.3071.115
 */