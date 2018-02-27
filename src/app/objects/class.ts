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

import {Student} from "./student";

export class Class{
    editMode: boolean = false;
    name: string;
    picpath: string;
    students: Student[] = [];
    classTeacher: string;
    classSpeaker: string;
    classFolder: string;
	remStud: string;

    constructor(name, picpath){
        this.name = name;
        this.picpath = picpath;
        this.students = [];
        this.classTeacher = null;
        this.classSpeaker = null;
        this.classFolder = null;
    }
}