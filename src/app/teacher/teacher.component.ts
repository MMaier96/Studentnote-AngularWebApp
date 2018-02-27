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
import {Teacher} from "../objects/teacher";

@Component({
	selector: 'app-teacher',
	templateUrl: './teacher.component.html',
	providers: [DataService],
	styleUrls: ['./teacher.component.css','../routing.css']
})


export class TeacherComponent implements OnInit {
	//Attributes
		showForm: boolean = false;
		teachers: Teacher[] = [];

	constructor(private dataService: DataService) {		//inject dataService
		this.teachers = dataService.getTechers();		//set transient data to persistent one
	}

	//Functions
		/*
		 * hide/show form inputs
		 */
		toggleShowForm(){
			this.showForm = !this.showForm;
		}

		/*
		 * validate a the inputs and create a new instance of a teacher and add it
		 * to the existing persistent data
		 */
		addTeacher(forename, surname, password, mail, age, street, house, zip, city, event, picpath){

			//prevent pagereload
				event.preventDefault();

			//when name is already in use return void + alert error
				if(this.nameAlreadyInUse(forename.value,surname.value)){
					alert("This name is already in use!");
					return;
				}

			//create a new instance of a teacher
				let teacher = new Teacher(forename.value, surname.value, password.value, mail.value, age.value, street.value, house.value, zip.value, city.value, picpath.value);
				
			//create array if its null otherwhise push into the existing
				if(this.teachers === undefined || this.teachers == null)
					this.teachers = [teacher];
				else
					this.teachers.push(teacher);
				

			//reset all fields
				forename.value = null;
				surname.value = null;
				password.value = null;
				mail.value = null;
				age.value = null;
				street.value = null;
				house.value = null;
				zip.value = null;
				city.value = null;
				picpath.value = null;

		//synchronize the persistent data with the transient one
			this.dataService.setTechers(this.teachers);
		}

		
		/*
		 * delete the selected teacher
		 */
		deleteTeacher(teacher, index){
			this.teachers.splice(index, 1);					//remove 1 teacher at arrays index
			this.dataService.setTechers(this.teachers);		//synchronize the persistent data with the transient one
		}
	
		
		/*
		 * check if the name is already in use
		 */
		nameAlreadyInUse(forename,surname){
		
			//no teachers? name can't be in use
				if(this.teachers == null){
					return false;
				}

			//search for teacher and check name
				for(let teacher of this.teachers){										//iterates throught all teachers
					if(forename == teacher.forename && surname == teacher.surname){		//check name equality
						return true;													//return true if name matches
					}
				}
			//no matches returns false
				return false;

		}

		
		/*
		 * enables/disables the edit mode for the selected teacher
		 */
		toggleEditMode(index){
			this.teachers[index].editMode = !this.teachers[index].editMode;
		}

		
		/*
		 * validates the input values create an instance from a teacher and save it to the persistent data
		 */
		saveEditMode(index,forename, surname, password, mail, age, street, house, zip, city, event, picpath){

			//prevent pagereload
				event.preventDefault();

			//save old teacher for current user update
				let oldTeacher = Object.assign({}, this.teachers[index]);   //deepcloning the object
				oldTeacher.editMode = false;								//set editMode to false [bugfix]

			//set values to object
				this.teachers[index].forename = forename.value;
				this.teachers[index].surname = surname.value;
				this.teachers[index].password = password.value;
				this.teachers[index].mail = mail.value;
				this.teachers[index].age = age.value;
				this.teachers[index].address.street = street.value;
				this.teachers[index].address.house = house.value;
				this.teachers[index].address.zip = zip.value;
				this.teachers[index].address.city = city.value;
				this.teachers[index].picpath = picpath.value==""?"../../assets/images/preview.jpg":picpath.value;
				this.toggleEditMode(index);



			//save new teacher for current user update
				let newTeacher = this.teachers[index];

			//synchronize persistent data with transient one
				this.dataService.setTechers(this.teachers);

			//update the profile (if its the current user)
				this.updateProfile(oldTeacher, newTeacher);
}

		/*
		 * update the teachers profile if its the current user
		 * needs to refresh the page to apply changes 
		 */
		updateProfile(oldTeacher, newTeacher){

			//get current user from local storage
				let actualTeacher = this.dataService.getCurrentUser();

			//check equality of 2 obejcts (JSON stringify will make things easier by check attributes by attributes)
				if(JSON.stringify(oldTeacher) == JSON.stringify(actualTeacher)){
					this.dataService.setCurrentUser(newTeacher);					//synchronize persistent teacher with changed transient					
					window.location.reload();										//reload the page
				}
		}

		/*
		 * method is called when the component is initialized 
		 */
		ngOnInit() {
			console.log("TeacherComponent successfully initialized!");
		}
}

