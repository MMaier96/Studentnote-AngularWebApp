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
import {style, animate, transition, trigger} from '@angular/core';
import {Teacher} from "../objects/teacher";
import {Router} from "@angular/router";

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [DataService],
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [   // :enter is alias for 'void => X'
				style({opacity:0}),
				animate(500, style({opacity:1}))
			]),
			transition(':leave', [   // :leave is alias for 'X => void'
				animate(500, style({opacity:0}))
			])
		])
	]
})


export class LoginComponent implements OnInit {
	//Attributes
		showUsernameHint: boolean = false;
		showPasswordHint: boolean = false;
		showNoTeachersHint: boolean = false;
		teachers: Teacher[];

	constructor(private dataService: DataService,private router: Router) { } //just inject the dataService and router

	//Functions
		/*
		 *validate the login data and forward if correct inputs
		 */
		login(username, password, event){

			//prevent page reload
				event.preventDefault();
				
			//is the request from admin?
				if(username.value == "admin" && password.value == "admin"){		//user == pw == "admin"
					this.dataService.setCurrentUser("admin");					//set admin as user
					window.location.reload();									//reload the page
					this.router.navigate(['/','dashboard']);					//navigate to the dashboard
					return;														//return void to prevent rest of function
				}

			//load persistent users from local storage
				this.teachers = this.dataService.getTechers();

			if(this.teachers == null)
			{
				this.activateNoTeachersHint();
				return;
			}
				
			//check if username and password are correct. Show hints if needed
				for(let teacher of this.teachers){
					if((teacher.forename + "." + teacher.surname) == username.value){	//username correct
						if(teacher.password == password.value){							//password correct
							this.dataService.setCurrentUser(teacher);					//set current user

							window.location.reload();									//reload the page
							this.router.navigate(['/','dashboard']);					//navigate to the dashboard
							return; 													//prevents hintboxes will show
						}else{
							this.activatePasswordHint();								//show password hintbox
							return;														//prevents hintboxes will show
						}
					}
				}
				
				//show username hintbox
					this.activateUsernameHint();

		}

		/*
		 * creates TestData to show all functions of the website
		 */
		createTestData(){
			console.log("creating testData ...");
			this.dataService.setTestData();
			console.log("testData successfully created!");
			window.location.reload();
		}
		
		/*
		 *shows the noteachers hintbox for 4 seconds
		 */
		activateNoTeachersHint(){
			this.showNoTeachersHint = true;		//show	
			setTimeout(() =>{					//wait 4 seconds
				this.showNoTeachersHint = false;	//hide
			}, 4000);
		}
		
		/*
		 *shows the username hintbox for 4 seconds
		 */
		activateUsernameHint(){
			this.showUsernameHint = true;		//show
			setTimeout(() =>{					//wait 4 seconds
				this.showUsernameHint = false;	//hide
			}, 4000);
		}
		
		/*
		 *shows the username hintbox for 4 seconds
		 */
		activatePasswordHint(){
			this.showPasswordHint = true;		//show	
			setTimeout(() =>{					//wait 4 seconds
				this.showPasswordHint = false;	//hide
			}, 4000);
		}

		/*
		 * method is called when the component is initialized 
		 */
		ngOnInit() {
			console.log("LoginComponent successfully initialized!");
		}
}