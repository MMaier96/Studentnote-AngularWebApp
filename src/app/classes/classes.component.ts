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
import {Class} from "../objects/class";
import {Student} from "../objects/student";
import {Teacher} from "../objects/teacher";

@Component({
	selector: 'classlist',
	templateUrl: './classes.component.html',
	styleUrls: ['./classes.component.css','../routing.css'],
	providers: [DataService]
})
export class ClassesComponent implements OnInit {

    //ClassAttributes
        showForm: boolean = false;
        classes: Class[] = [];
        students: Student[] = [];
        teachers: Teacher[] = [];

    constructor(private dataService: DataService){		//inject dataService
		//get persistent data and save it to the transient
			this.classes = dataService.getClasses();
			this.teachers = dataService.getTechers();
			this.students = dataService.getStudents();
			console.log(this.classes);
    }

    //Functions
        /*
         * Adds a class to the persient/transient data
         */
        addClass(name,picpath, event){

        //prevent default event (page won't reload on submit)
            event.preventDefault();

        //return void + alert if name is already in use
            if(this.classNameInUse(name.value)){
                alert("Class already exists!");
                return;
            }

        //create new class instance
            let path = picpath.value == ""?"../../assets/images/preview.jpg":picpath.value;     //if picpath is empty use default
            let newClass = new Class(name.value.toUpperCase(), path);                           //pass attributes to constructor

        //reset input fields values
            name.value = null;
            picpath.value = null;

        //create array if classes not instanciated, push otherwise
            if(this.classes === undefined || this.classes == null)
                this.classes = [newClass];
            else
                this.classes.push(newClass);

        //update local storage
            this.dataService.setClasses(this.classes);
        }

        /*
         * search the selected class and remove it from persistent data,
         * after synchronize transient data to persistent data
         */
        deleteClass(index){
            //set className of student to null
                for(let student of this.classes[index].students){       //iterate students of selected class
                    for(let student2 of this.students){                 //iterate to all students
                        if(student.forename == student2.forename){      //check if forename of both students are equal
                            if(student.surname == student2.surname){    //check if surname of both students are equal
                                student2.className = "";                //reset className to null
                            }
                        }
                    }
                }

            //remove 1 element from array at index
                this.classes.splice(index,1);

            //synchronize classes/students persistent to transient data
                this.dataService.setClasses(this.classes);
                this.dataService.setStudents(this.students);
        }

        /*
         * show/hide the inputs
         */
        toggleShowForm(){
            this.showForm = !this.showForm;
        }

        /*
         * checks wheather a className is already in use
         */
        classNameInUse(className){
            if(this.classes === undefined || this.classes == null){     //no classes defined -> name can't be in use
                return false;                                           //return void
            }

            //iterate all classes and check if names are equal
            //return true if a className already exists
				for(let schoolclass of this.classes){
				  if(schoolclass.name.toLowerCase() == className.toLowerCase()) {
					return true;
				  }
				}

            //if function didn't returned til here no matches found
				return false;
        }

        /*
         * enables/disables the editMode of selected class
         */
        toggleEditMode(index){
            this.classes[index].editMode = !this.classes[index].editMode;
        }

        /*
         * synchronize the persistent data to the transient
         * resets inputs values and disables editMode
         */
        saveEditMode(index, nameEdit, picpathEdit, folderEdit, speakerEdit, teacherEdit, remStudent, event){

            //prevent default event (window won't reload on submit)
                event.preventDefault();
				
			//refresh all students class
				for(let student of this.students){
					if(student.className == this.classes[index].name){
						student.className = nameEdit.value;
					}
				}
			
			
            //set parameters to the transient data
                this.classes[index].editMode = false;
                this.classes[index].name = nameEdit.value;
                this.classes[index].picpath = picpathEdit.value;
                this.classes[index].classFolder = folderEdit.value.split(": ")[1];
                this.classes[index].classSpeaker = speakerEdit.value.split(": ")[1];
                this.classes[index].classTeacher = teacherEdit.value.split(": ")[1];
				
			//search and remove student of class
				let removeStudentName = remStudent.value.split(": ")[1];
				let counter = 0;
				for(let student of this.classes[index].students){
					if(student.forename + " " + student.surname == removeStudentName){
						this.classes[index].students.splice(counter, 1);
					}
					counter++;
				}
				
			//search for student and remove its class
				for(let student of this.students){
					if(student.forename + " " + student.surname == removeStudentName){
						student.className = null;
					}
				}
				
			//remove classfolder/speaker if it is removed
				if(this.classes[index].classFolder == removeStudentName){
					this.classes[index].classFolder = null;
				}
				if(this.classes[index].classSpeaker == removeStudentName){
					this.classes[index].classSpeaker = null;
				}

		
            //save to localstorage / synchronize persistent data with transient
                this.dataService.setClasses(this.classes);
                this.dataService.setStudents(this.students);
        }

        /*
         * method will called when the component is initialized
         */
        ngOnInit() {
            console.log("ClassComponent successfully initialized!")
        }
}