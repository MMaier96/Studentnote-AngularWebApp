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
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
	providers: [DataService]
})
export class SidebarComponent implements OnInit {
	//Attributes
		currentUser: Teacher;
	
	constructor(private dataService: DataService) {			//inject dataService
		this.currentUser = dataService.getCurrentUser();
	}

	/*
	 * the method remove the currentUser from persistent data
	 * and reload the page
	 */
	logout(){
		this.dataService.removeCurrentUser();		//remove currentUser from persistent data

		window.location.reload();					//reload the page
	}
	
	/*
	 * method is called when the component is initialized 
	 */
	ngOnInit() {
		console.log("SidebarComponent successfully initialized!");
	}
}
