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
import {Class} from "../objects/class";

@Component({
	selector: 'app-students',
	templateUrl: './students.component.html',
	styleUrls: ['./students.component.css','../routing.css'],
	providers: [DataService]
})

export class StudentsComponent implements OnInit {

	//Attributes
		schoolclass2: string;
		showForm: boolean = false;
		classes: Class[] = [];
		students: Student[] = [];

	constructor(private dataService: DataService) {		//inject dataService
		//set transient data to persistent one
			this.classes = dataService.getClasses();
			this.students = dataService.getStudents();
	}

	//Functions
		/*
		 * show/hide the inputs
		 */
		toggleShowForm(){
			this.showForm = !this.showForm;
		}

		/*
		 * show/hide the inputs
		 */
		addStudent(schoolclass, forename, surname, age, street, house, zip, city, $event, picpath){

			//prevent default event
				event.preventDefault();

			//check if student already exists, return void + alert error
				if(this.nameInUse(forename.value, surname.value)){
					alert("Student already exists!");
					return;
				}

			//create new student
				//set picPath to defualt if empty
					picpath.value = picpath.value==""?"../../assets/images/preview.jpg":picpath.value;
				
				//create new instance of a student
					let newStudent = new Student(forename.value, surname.value,schoolclass.value.split(": ")[1], age.value, street.value, house.value, zip.value,city.value, picpath.value);

			//reset input fields
				forename.value = null;
				surname.value = null;
				age.value = null;
				street.value = null;
				house.value = null;
				zip.value = null;
				city.value = null;
				picpath.value = null;


			//create new array if empty or push otherwise
			if(this.students === undefined || this.students == null)
				this.students = [newStudent];
			else
				this.students.push(newStudent);
			

			//push student into class
				for(let c of this.classes){								//iterate throught all classes
					if(c.name == schoolclass.value.split(": ")[1]){		//if names are equals
						c.students.push(newStudent);					//push student to existing
					}
				}
				
			//synchronize persistent data with transient one
				this.dataService.setClasses(this.classes);
				this.dataService.setStudents(this.students);
		}

		/*
		 * check if the name is already in use
		 */
		nameInUse(forename, surname){
			//if the array is null or undefined return false
				if (this.students == null || this.students == undefined){
					return false;
				}
			
			//iterate throught all students and check name equality
				for(let student of this.students){
					if(student.forename + student.surname == forename + surname){
						return true;
					}
				}
			
			//no matches == name not in use
				return false;
		}

		
		/*
		 * show/hide the inputs
		 */
		deleteStudent(index){

			//search for student in his class and remove from class
				for(let c of this.classes){												//iterate all persistent classes
					if(c.name == this.students[index].className){						//transient className equal to persistent className
						let index2 = 0;													//define new indexCoutner  (2)
						for( let student of c.students){								//iterate all students within the class
							if(student.forename == this.students[index].forename){		//check forename equality	
								if(student.surname == this.students[index].surname){	//check surname equality
									c.students.splice(index2, 1);						//remove 1 student from array at index
									break;	//brake the loop. Operation done
								}
							}
							index2++;
						}
						break;		//cancel for loop, because class was found but students doesnt exist
					}
				}

			//remove student from persistent students
				this.students.splice(index,1);
			
			//synchronize all persistent students with transient ones
				this.dataService.setStudents(this.students);
				this.dataService.setClasses(this.classes);
		}
		
		
		/*
		 * enable/disable editMode
		 */
		toggleEditMode(index){
			this.students[index].editMode = !this.students[index].editMode;
		}

		
		/*
		 * save the edited attributes to the persistent data
		 */
		saveEditMode(index,forename, surname, schoolclass, age, street, house, zip, city, event, picpath){
			//prevent default event
				event.preventDefault();


			//set new properties
				this.students[index].forename = forename.value;
				this.students[index].surname = surname.value;
				this.students[index].className = schoolclass.value.split(": ")[1];
				this.students[index].age = age.value;
				this.students[index].address.street = street.value;
				this.students[index].address.house = house.value;
				this.students[index].address.zip = zip.value;
				this.students[index].address.city = city.value;
				this.students[index].picpath = picpath.value;

		
			//push the edited student into his class
				for(let c of this.classes){								//iterate throught all classes
					if(c.name == this.students[index].className){		//if className is equal								
						c.students.push(this.students[index]);			//push into classes students list
					}
				}

			//disable edit mode
				this.toggleEditMode(index);

			//synchronize persistent data from students/classes with transient
				this.dataService.setStudents(this.students);
				this.dataService.setClasses(this.classes);

		}

		/*
		 * method is called when the component is initialized 
		 */
		ngOnInit() {
			console.log("StudentsComponent successfully initialized!");
		}

}